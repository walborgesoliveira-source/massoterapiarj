# Relatório técnico — Equipe, sessões especiais e agendamento

**Projeto:** Massoterapia RJ

**Data:** 14/08/2026

**Ambiente:** Produção em VPS própria

## Objetivo

Consolidar as alterações realizadas no site institucional, no agendamento público e no painel administrativo da Massoterapia RJ em 14/08/2026.

## 1. Atualização da equipe institucional

A seção “Nossa equipe” passou a apresentar somente os três profissionais ativos definidos para o site:

- Ellaine;
- Júlio César;
- Selma.

As fotografias individuais e a fotografia coletiva passaram a ser carregadas de `imagens/equipes/`:

- `Ellaine.jpg`;
- `Júlio César.jpg`;
- `Selma.jpg`;
- `Equipe MassoterapiaRJ.jpg`.

Foram atualizadas as três biografias, os textos alternativos das imagens e o posicionamento interno das fotografias. A grade foi ajustada para dois cards após o destaque de Ellaine, evitando espaços vazios. Cores, tipografia, bordas, sombras, animações e identidade visual foram preservadas.

## 2. Sessões especiais no site

Foi criada a seção “Sessões especiais” imediatamente após a tabela de serviços tradicionais.

| Serviço | Duração | Valor | Descrição |
|---|---:|---:|---|
| Massoterapia 90 minutos | 90 min | R$ 420 | Mais tempo para um cuidado completo, com foco nas necessidades do corpo. |
| Mix de Massagens | 120 min | R$ 520 | Sessão de duas horas combinando até seis técnicas. |

Os cards reutilizam os tokens visuais e o componente de CTA existentes. A tabela tradicional continua filtrando e exibindo apenas os serviços de 50 minutos já cadastrados, sem alteração de seus preços.

## 3. Integração das sessões especiais ao agendamento

Os dois serviços foram incorporados ao catálogo central `MRJ_SERVICES`, que passou a ser a fonte de nome, duração e valor para o site e o agendamento.

O fluxo público agora:

- apresenta as sessões especiais na seleção de serviços;
- consulta a disponibilidade informando a duração escolhida;
- calcula o horário final a partir do início e da duração;
- mostra início, término, duração e valor no resumo;
- envia `duracao_media` e `valor_referencia` no payload;
- preserva o fluxo único de serviço, data, horário, profissional, dados e confirmação.

A API já possuía cálculo dinâmico de duração, verificação de encaixe integral na escala e conflito por sobreposição de intervalos. Essa lógica foi preservada e reutilizada para sessões de 50, 90 e 120 minutos.

## 4. Painel administrativo

O painel passou a exibir nos agendamentos:

- horário inicial e final;
- duração em minutos;
- valor de referência;
- serviço;
- profissional;
- cliente e demais informações existentes.

A mensagem preparada para aviso à profissional também passou a incluir intervalo, duração e valor. O painel foi recompilado e o bundle publicado é `painel/assets/index-46hGdC2A.js`.

## 5. Inclusão de Júlio César na agenda

Júlio César foi adicionado à lista ativa da API, ao fallback do agendamento público, aos turnos e controles do painel.

### Escala recorrente

| Dia | Horário |
|---|---|
| Segunda-feira | 09:00 às 20:00 |
| Terça-feira | 09:00 às 11:00 |
| Quarta-feira | 09:00 às 11:00 |
| Quinta-feira | 09:00 às 11:00 |
| Sexta-feira | 09:00 às 20:00 |
| Sábado | 09:00 às 18:00 |
| Domingo | Sem atendimento |

As exceções de 14/08 e 15/08 também foram atualizadas para que a escala de Júlio não fosse anulada pelo calendário específico anteriormente existente.

Na arquitetura atual, profissionais são identificados pelo nome. Não existe uma tabela própria de colaboradores com ID numérico vinculada à agenda. Portanto, o identificador operacional de Júlio é `Júlio César`.

Também não existe regra persistida de habilitação entre profissional e técnica na agenda. Todos os profissionais escalados seguem o mesmo catálogo de serviços; Júlio foi integrado pelo mesmo padrão já utilizado por Ellaine e Selma.

## 6. Validações executadas

- Fotografias, nomes, biografias e textos alternativos verificados.
- Site institucional validado em desktop, tablet e celular.
- Ausência de imagens quebradas e transbordamentos confirmada.
- Serviços de 50 minutos preservados.
- Payloads de 50, 90 e 120 minutos validados sem envio real.
- Limites de expediente confirmados para sessões de 50, 90 e 120 minutos.
- Conflitos totais e parciais validados pela regra de sobreposição de intervalos.
- Intervalos apenas adjacentes permaneceram permitidos.
- Janela de Júlio entre 09:00 e 11:00 validada:
  - 50 minutos: inícios em 09:00, 09:30 e 10:00;
  - 90 minutos: inícios em 09:00 e 09:30;
  - 120 minutos: início somente em 09:00.
- Domingo confirmado sem atendimento.
- Júlio confirmado na seleção pública, no controle de bloqueios e no painel.
- Painel validado em desktop e celular.
- Build do painel concluído com sucesso.
- `git diff --check` aprovado nos projetos envolvidos.

Nenhum agendamento fictício foi gravado durante os testes.

## 7. Publicação em produção

O site e o painel são servidos por bind mount somente leitura e passaram a disponibilizar os arquivos atualizados diretamente.

Somente o container `coreps_api` foi reconstruído e reiniciado para ativar a nova escala na API. O container do PostgreSQL permaneceu ativo e saudável; o banco não foi reiniciado nem alterado.

Após a publicação, foram confirmados:

- HTTP 200 no agendamento e no painel;
- API ativa sem erros nos logs;
- Júlio disponível nos dias e horários configurados;
- Mix de Massagens na terça-feira disponível para Júlio somente às 09:00;
- domingo sem atendimento;
- fluxo público real funcionando em desktop e celular, sem envio do formulário.

## 8. Arquivos principais envolvidos

### Site e artefatos publicados

- `/root/massoterapiarj/index.html`
- `/root/massoterapiarj/theme.js`
- `/root/massoterapiarj/sections-top.jsx`
- `/root/massoterapiarj/sections-services.jsx`
- `/root/massoterapiarj/agendamento.html`
- `/root/massoterapiarj/painel/index.html`
- `/root/massoterapiarj/painel/assets/index-46hGdC2A.js`
- `/root/massoterapiarj/imagens/equipes/`

### Fonte do painel

- `/root/massoterapiarj-painel/src/pages/Agenda.jsx`

### API da agenda

- `/root/core-ps/backend/src/routes/agendamentos.js`

## Resultado

As atualizações de equipe, sessões especiais, duração dinâmica e escala de Júlio César estão publicadas e operacionais, mantendo o padrão visual e o fluxo existente da Massoterapia RJ.

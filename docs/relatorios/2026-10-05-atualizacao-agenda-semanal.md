# Atualização de agenda — vigência 05/10/2026

Nova escala publicada e validada no domínio https://www.massoterapiarj.com.br/agendamento.html.

| Profissional | Disponibilidade |
|---|---|
| Selma | Segunda 14:00–20:30; terça a quinta 11:00–20:30; sexta 10:00–20:30 |
| Júlio César | Segunda a sexta 11:00–18:00; sábado 09:00–16:00 |
| Ellaine | Terça a quinta 11:00–19:00 |

Todos os demais dias e períodos permanecem indisponíveis para novas reservas. A sessão completa deve caber na janela; durações, grade e antecedência existentes foram preservadas.

## Configuração anterior e histórico

Anteriormente: segunda sem escala; Ellaine e Selma terça a quinta 11:00–20:30; Selma sexta 10:00–20:30; Júlio sexta 09:00–20:30 e sábado 09:00–17:00. A escala anterior foi mantida em ESCALA_SEMANAL_ANTERIOR, utilizada antes de 05/10/2026; exceções históricas por data preservadas. Comparação das escalas de 01/06 a 04/10 contra a versão anterior aprovada.

## Reservas, bloqueios e conflitos

- Reserva 213: Selma, 06/10 às 19:00, 50 minutos, aprovada e preservada.
- Reserva 214: Ellaine, 06/10 às 14:00, 50 minutos, aprovada e preservada.
- Bloqueio 419: Selma, 07/10 das 16:00 às 17:00, preservado; sessões com qualquer sobreposição permanecem indisponíveis para ela.
- Nenhum bloqueio futuro de afastamento da Ellaine encontrado. Nenhuma remoção de bloqueio necessária.
- Nenhuma reserva futura em conflito com a nova escala encontrada.
- Comparação integral antes/depois confirmou igualdade de todos os campos: 196 agendamentos, 310 regras de disponibilidade, 64 entidades, 1 serviço e 0 vínculos entidade_servicos. Nenhuma tabela ou dado de negócio alterado.

## Arquivos e publicação

- /root/core-ps/backend/src/routes/agendamentos.js: nova escala com vigência e preservação histórica.
- /root/massoterapiarj/agendamento.html: alteração tecnicamente necessária no fallback da escala; sem alteração visual ou de conteúdo.
- /root/massoterapiarj-painel/src/pages/Agenda.jsx: fallback com vigência, turnos padrão e indicação da vigência.
- Build do painel em dist, publicado em /root/massoterapiarj/painel e no container massoterapiarj_painel; bundle index-x3lx2kQC.js.
- API publicada por imagem derivada da versão em execução, alterando somente o arquivo da agenda. Imagem 2cb7a48fd00da9071028958528b816515cacc157b486ee84f26b0283690a2cec.
- Imagem do painel atualizada para persistência em recriações: b4c64ce70e6f56235e480fa59febd3614349716b8ba1f160c28adb8a814c3f3f.
- Alterações preexistentes preservadas; nenhum commit criado.

## Testes e resultado

- 60.480 verificações locais minuto a minuto, de 05/10 a 18/10, para sessões de 50, 90 e 120 minutos. Limites de início, término e dias sem escala aprovados.
- Escala semanal consistente nos três arquivos. Sintaxe Node, build Vite e git diff --check aprovados.
- Chromium na página pública real: 42 combinações de data/duração e 597 horários comparados com expectativa independente, incluindo reservas e bloqueio. Rotas /coreps-api/agendamentos/horarios-disponiveis e /painel/api/agendamentos/horarios-disponiveis idênticas.
- Todos os horários selecionáveis e os profissionais livres exibidos na interface conferidos; Ellaine somente terça a quinta até 19:00. Nenhum erro JavaScript e nenhuma reserva de teste criada.
- Para cobrir integralmente 05/10, o relógio apenas do navegador foi fixado no início desse dia durante a matriz de testes; relógio do servidor não alterado.
- Conferência adicional com relógio real, HTML público idêntico ao arquivo local e disponibilidade de 06/10.
- API iniciou normalmente, sem erro nos logs consultados.

Resultado: disponibilidade apresentada aos clientes corresponde à escala solicitada, descontadas as reservas existentes, o bloqueio específico e as regras normais de antecedência. Serviços, preços, durações, profissionais cadastrados e identidade visual preservados.

Backups, scripts, dados de comparação, capturas de tela e resultados: /root/backups/massoterapiarj/agenda-20261005/.

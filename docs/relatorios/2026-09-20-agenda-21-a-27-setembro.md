# Agenda Massoterapia RJ — 21 a 27/09/2026

Atualização autorizada pelo usuário e publicada em 20/09/2026. Exceções limitadas às sete datas; escala recorrente preservada.

| Data | Selma | Júlio César | Ellaine |
|---|---|---|---|
| 21/09, segunda | 14:00–20:30 | 11:00–18:00 | Indisponível |
| 22/09, terça | 11:00–20:30 | 11:00–18:00 | Indisponível |
| 23/09, quarta | 11:00–20:30 | 11:00–18:00 | Indisponível |
| 24/09, quinta | 11:00–20:30 | 11:00–18:00 | Indisponível |
| 25/09, sexta | 10:00–20:30 | 11:00–18:00 | Indisponível |
| 26/09, sábado | Indisponível | 09:00–16:00 | Indisponível |
| 27/09, domingo | Indisponível | Indisponível | Indisponível |

## Auditoria anterior

A API publicada retornava Júlio segunda 09:00–20:00; terça a quinta 09:00–11:00; sexta 09:00–20:00; sábado 09:00–18:00. Selma e Ellaine estavam escaladas terça a quinta 11:00–20:00; sexta Ellaine 11:00–20:00 e Selma 14:00–20:00. Domingo sem atendimento. O fallback semanal do site divergia dessa API.

Nenhum registro de bloqueio, liberação ou substituição em `colaborador_disponibilidade` para 21–27/09. Uma reserva existente: ID 200, Selma, 22/09 às 18:30, duração de 90 minutos, aprovada. Termina às 20:00, dentro da nova escala. Nenhum conflito encontrado.

## Alterações

- `/root/core-ps/backend/src/routes/agendamentos.js`: sete exceções por data.
- `/root/massoterapiarj/agendamento.html`: as mesmas sete exceções no fallback.
- `/root/massoterapiarj-painel/src/pages/Agenda.jsx`: as mesmas sete exceções no fallback.
- `/root/massoterapiarj/painel/index.html` e novo bundle `painel/assets/index-CisOnsp0.js`: publicação do painel recompilado. Build também sincronizado no container do painel.
- Este relatório.

Nenhuma escrita em tabelas. Cadastros, clientes, reservas, serviços, preços, durações e identidade visual preservados. Ellaine permanece cadastrada e não integra nenhuma escala nas sete datas. Não havia regra adicional que pudesse liberá-la nesse período.

API publicada mediante imagem derivada da imagem em execução, substituindo somente o arquivo da agenda; o mesmo arquivo foi sincronizado no container e o serviço reiniciado. Imagem preparada: `sha256:0299729fd8dd29f1192b67733e70302df2cf882c7ec527fb484287a0283e589b`. Alterações preexistentes do CORE PS não foram incluídas na publicação.

## Validação

- 30.240 verificações locais, minuto a minuto, para os sete dias e durações de 50, 90 e 120 minutos: aprovadas.
- Igualdade das exceções API/site/painel e preservação das outras datas de setembro: aprovadas.
- Build do painel, sintaxe da API e verificação de whitespace: aprovados.
- Navegador Chromium no domínio público: 21 combinações de data/duração e 297 registros de horários conferidos; todos os horários selecionáveis comparados com a API e todos os profissionais selecionáveis conferidos na interface.
- Rotas `/coreps-api/agendamentos/horarios-disponiveis` e `/painel/api/agendamentos/horarios-disponiveis`: respostas iguais nas 21 combinações.
- Nenhuma sessão ultrapassa o expediente; nenhum horário selecionável fora da escala; Ellaine não disponível; sábado somente Júlio; domingo sem horários.
- Reserva de Selma considerada por sobreposição integral em todas as durações. Nenhuma reserva fictícia criada.
- Nenhum erro JavaScript observado. API reiniciada e respondendo normalmente.
- Todos os 182 registros de `agendamentos` preservados: checksum integral antes/depois `8f9755e06c5bcde5ff4471514a3b677c`.

Backups, scripts de teste e captura do navegador: `/root/backups/massoterapiarj/agenda-20260921/`. Imagem anterior preservada como `mrj-api-before-20260921:local`.

Resultado: disponibilidade pública confirmada conforme a escala solicitada para 21–27/09/2026.

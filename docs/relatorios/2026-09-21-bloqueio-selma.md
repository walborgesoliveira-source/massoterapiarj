# Bloqueio de Selma — 21/09/2026

Solicitação da gestão: indisponibilidade integral em segunda-feira, 21/09/2026. Usada a data explícita do pedido.

Anterior: Selma 14:00–20:30; Júlio César 11:00–18:00. Nova escala: Selma indisponível o dia inteiro; Júlio César preservado 11:00–18:00.

Consulta prévia: nenhum agendamento e nenhuma regra de disponibilidade em 21/09. Inserido bloqueio 398 para Selma, 00:00–23:59:59, sem substituto. Nenhum cliente cancelado, excluído ou reagendado.

Removida somente a entrada de Selma em 21/09 das exceções da API (core-ps/backend/src/routes/agendamentos.js), site (agendamento.html) e painel (src/pages/Agenda.jsx). Escalas recorrentes, demais datas, profissionais, serviços e preços preservados. Alterações preexistentes não incluídas.

Publicado site, build do painel (index-CYgfWu5D.js) e arquivo isolado da API no container e imagem core-ps-coreps_api. Backup: /root/backups/massoterapiarj/bloqueio-selma-20260921/.

Validação: 30.240 verificações de escala por minuto para 21–27/09 e durações 50/90/120; comparação das demais datas de setembro com backup; coerência dos fallbacks; sintaxe da API; build do painel; git diff --check. Rotas públicas /coreps-api/agendamentos/horarios-disponiveis e /painel/api/agendamentos/horarios-disponiveis idênticas nas três durações em 21 e 22/09. Selma ausente em todos os horários de 21/09 e presente em 22/09. HTML público e referência ao bundle confirmados no domínio massoterapiarj.com.br. Não realizada inspeção visual em sessão autenticada.

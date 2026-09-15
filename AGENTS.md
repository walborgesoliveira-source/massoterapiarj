# Regras do projeto Massoterapia RJ

## Alterações de agenda

- Tratar a API/banco do CORE PS como fonte oficial da escala, indisponibilidades e agendamentos.
- O site e o painel podem manter escalas locais somente como fallback. Quando a API responder com sucesso, nenhum dado hardcoded ou salvo no navegador pode sobrescrever profissionais, horários, bloqueios ou ocupações retornados pela API.
- Toda escala excepcional por data deve ser aplicada de forma coerente na API, no fallback do site e no fallback do painel. Não alterar a escala recorrente para representar uma exceção temporária.
- Antes de escrever, consultar bloqueios e agendamentos existentes nas datas afetadas. Nunca cancelar, excluir ou reagendar clientes automaticamente.
- Bloqueios devem considerar sobreposição do intervalo completo da sessão, incluindo atendimentos iniciados antes do bloqueio. Reutilizar a lógica central de conflito.
- Validar todas as datas afetadas, todos os profissionais e as durações de 50, 90 e 120 minutos, incluindo os limites de início e término.
- Após publicar, comparar as respostas das rotas do site e do painel e testar o domínio público real. Confirmar que outras datas, profissionais, serviços e preços não mudaram.
- Registrar no relatório a escala anterior, a nova escala, bloqueios e agendamentos encontrados, arquivos alterados, publicação e testes executados.
- Não incluir em commits de agenda alterações preexistentes ou não relacionadas.

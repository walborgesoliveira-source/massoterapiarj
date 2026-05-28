# OS de Serviços - Massoterapia RJ

**Período:** 27/05/2026 e 28/05/2026  
**Projeto:** Site, agendamento online, painel operacional e integrações Massoterapia RJ  
**Responsável técnico:** Equipe de desenvolvimento

## Resumo executivo

Foram realizados ajustes no fluxo de agendamento online e no painel operacional para tornar a disponibilidade mais fiel à escala real de profissionais, evitar bloqueios indevidos de horários e melhorar a clareza das informações exibidas para clientes e equipe.

O sistema agora considera a profissional escolhida pelo cliente, mantém outras profissionais livres no mesmo horário quando houver capacidade, mostra a profissional ocupada como **Em atendimento** e libera horários com cálculo real de antecedência, sem arredondamento artificial.

## Serviços executados

### 1. Ajuste da disponibilidade por profissional

- O agendamento passou a considerar a profissional escolhida pelo cliente.
- Quando há mais de uma profissional disponível no mesmo horário, somente a profissional selecionada fica ocupada.
- As demais profissionais continuam disponíveis para receber outros clientes no mesmo horário, respeitando a capacidade da escala.
- A API passou a validar conflito por profissional e por sobreposição de atendimento.

### 2. Regra de atendimento de 50 minutos

- A profissional escolhida fica marcada como ocupada durante o tempo da sessão.
- Sessões de 50 minutos bloqueiam somente a profissional em atendimento.
- Exemplo: se uma profissional atende às 09:00, ela fica indisponível até 09:50.
- Durante esse período, a tela do cliente exibe a profissional como **Em atendimento**.

### 3. Melhoria da tela de agendamento do cliente

- O cliente passou a visualizar claramente quais profissionais estão disponíveis.
- Profissionais ocupadas aparecem como **Em atendimento** e não podem ser selecionadas.
- Informações internas de troca, substituição ou ajustes de equipe foram removidas da tela do cliente.
- Horários sem profissional disponível aparecem como **Sem Atendimento**.

### 4. Horário real de agendamento

- A regra de antecedência mínima de 70 minutos foi mantida.
- O sistema deixou de arredondar o primeiro horário para a grade de 30 minutos.
- O primeiro horário exibido agora usa o cálculo real.
- Exemplo: se o horário atual for 13:07, o primeiro horário liberado será 14:17.
- Os horários seguintes seguem a partir desse horário real, mantendo sequência operacional.

### 5. Ajuste do workflow n8n

- O workflow ativo de novo agendamento foi atualizado.
- A etapa que bloqueava o horário inteiro antes de consultar a capacidade real foi corrigida.
- O n8n agora deixa a API decidir se ainda existe profissional livre no horário.
- O workflow foi reiniciado e ativado novamente no n8n.

### 6. Ajuste no painel operacional

- O painel passou a aceitar o status **Excluído** para atendimentos.
- O status **Excluído** funciona como exclusão lógica: mantém o histórico, mas libera o horário.
- O status foi incluído na lista do modal de atendimento.
- Atendimentos com status **Excluído** deixam de contar como ocupação da agenda.

### 7. Deploy e validações

- O site de agendamento foi atualizado no ambiente publicado.
- A API CORE PS foi reconstruída e reiniciada.
- O painel Massoterapia RJ foi reconstruído e reiniciado.
- O workflow ativo no n8n foi atualizado no banco e recarregado com reinício do serviço.

## Validações realizadas

- Validação de sintaxe da API.
- Build de produção do painel.
- Validação do arquivo de workflow n8n.
- Validação do JavaScript da tela de agendamento.
- Conferência dos containers Docker em execução.
- Conferência do conteúdo publicado no site e no painel.
- Teste de saúde do n8n.
- Teste de resposta da API de disponibilidade.

## Resultado

O fluxo de agendamento está mais preciso e alinhado à operação real:

- Cliente vê horários reais.
- Cliente vê somente informações adequadas para atendimento.
- Profissional ocupada aparece como **Em atendimento**.
- Outra profissional no mesmo horário continua disponível.
- Painel permite marcar atendimento como **Excluído** sem apagar o histórico.
- n8n e API trabalham com a regra correta de capacidade por profissional.

## Observação operacional

A recomendação de uso permanece:

1. Cliente agenda pelo site.
2. Sistema registra o pedido como aprovado.
3. Painel acompanha a agenda e a profissional responsável.
4. Ajustes devem ser feitos no painel.
5. Alterações em produção devem seguir o fluxo: staging, teste, validação e produção.

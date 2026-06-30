# OS Informativa ao Cliente - Agendamento Online Massoterapia RJ

**Data:** 01/06/2026  
**Projeto:** Massoterapia RJ - agendamento online e painel operacional  
**Tipo:** Comunicado informativo ao cliente  
**Responsável técnico:** Equipe de desenvolvimento

## Resumo

Foi atualizada a regra de disponibilidade do agendamento online da Massoterapia RJ para deixar os horários exibidos ao cliente mais alinhados à operação real da clínica.

A partir desta atualização, o sistema considera o horário de início, a duração do serviço escolhido, a escala da profissional e a antecedência mínima para novos agendamentos.

## O que mudou para o cliente

### 1. Horários exibidos com mais precisão

O site passa a mostrar somente horários realmente disponíveis para atendimento, considerando:

- escala oficial das profissionais;
- duração do serviço escolhido;
- atendimentos já confirmados;
- profissional escolhida pelo cliente;
- antecedência mínima para novos agendamentos.

### 2. Disponibilidade imediatamente após o atendimento

Não existe intervalo obrigatório entre atendimentos.

A profissional poderá receber um novo agendamento imediatamente após o término do serviço anterior, desde que esteja dentro do seu horário de trabalho e sem conflito com outro atendimento.

Exemplo:

- Atendimento: 10:00 às 10:50
- Próximo horário possível para a mesma profissional: 10:50

O sistema não aplica bloqueio adicional após o término do serviço.

### 3. Regra por profissional

O bloqueio vale para a profissional que realizou o atendimento.

Quando houver mais de uma profissional na escala, outra profissional livre poderá continuar aparecendo como disponível para o mesmo período, desde que esteja dentro da escala e sem conflito de agenda.

### 4. Antecedência mínima mantida

O cliente continua podendo agendar apenas com antecedência mínima de 70 minutos em relação ao horário atual de Brasília.

Essa regra evita agendamentos imediatos e permite que a equipe organize o atendimento com segurança.

### 5. Fuso horário oficial

Todos os cálculos de agenda usam o fuso horário de Brasília:

```text
America/Sao_Paulo
```

Isso evita divergências quando o cliente acessa o site de outro estado, país ou dispositivo.

## Como funciona o novo fluxo

1. O cliente acessa a página de agendamento.
2. Escolhe o serviço desejado.
3. Seleciona a data.
4. O sistema consulta a agenda e exibe apenas horários possíveis.
5. O cliente escolhe uma profissional disponível.
6. O sistema valida novamente a disponibilidade antes de enviar.
7. O agendamento é registrado no sistema.
8. A equipe acompanha o atendimento pelo painel operacional.

## Benefícios

- Reduz conflito de horários.
- Melhora a organização da equipe.
- Deixa a agenda mais fiel à disponibilidade real.
- Oferece uma experiência mais clara para o cliente.

## Resultado esperado

O cliente passa a visualizar uma agenda mais confiável, com horários compatíveis com a escala real da equipe e com a duração do serviço escolhido.

## Observação

Caso o cliente tenha dúvida, não encontre um horário desejado ou precise de ajuda para concluir o agendamento, a orientação permanece entrar em contato com a equipe pelo WhatsApp oficial da Massoterapia RJ.

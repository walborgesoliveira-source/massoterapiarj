# Regra de Disponibilidade de Horários – Antecedência Mínima

## Objetivo
Evitar que clientes realizem agendamentos imediatos, garantindo tempo suficiente para preparação da equipe, organização operacional e confirmação dos atendimentos.

## Regra Obrigatória
Na tela de seleção de **data e horários disponíveis**, principalmente na etapa de **escolha de horário**, o sistema deve exibir ao cliente somente horários com **antecedência mínima de 70 minutos** em relação ao horário atual de acesso ao site.

## Fuso Horário Obrigatório

Todos os cálculos, comparações, filtros e exibições de horários devem utilizar exclusivamente o:

**Fuso horário de Brasília – Brasil (BRT/Brasília - America/Sao_Paulo)**

O sistema não deve utilizar:

- Horário do navegador do cliente;
- Horário local do dispositivo do usuário;
- Horário automático do servidor caso esteja em outro país;
- UTC sem conversão.

O horário deve ser padronizado para evitar divergências em agendamentos quando clientes acessarem o sistema por diferentes regiões ou dispositivos.

---

## Funcionamento

### Exemplo 1

Horário atual (Brasília): **10:00**

O cliente NÃO poderá visualizar:

- 10:00
- 10:15
- 10:30
- 10:45
- 11:00

O primeiro horário permitido será:

- **11:10** (70 minutos após o horário atual)

---

### Exemplo 2

Horário atual (Brasília): **14:25**

O cliente NÃO poderá visualizar horários anteriores a:

- **15:35**

O primeiro horário disponível será:

- **15:35** (ou o próximo horário válido da agenda)

---

## Lógica do sistema

Ao abrir a tela de agendamento:

1. Capturar o horário atual utilizando o fuso:
   **America/Sao_Paulo**
2. Somar **70 minutos** ao horário atual.
3. Filtrar a agenda.
4. Ocultar todos os horários anteriores ao limite calculado.
5. Exibir apenas horários iguais ou superiores ao tempo mínimo permitido.

---

## Justificativa operacional

Esta regra existe porque a equipe necessita de tempo para:

- Preparação do ambiente;
- Organização dos profissionais disponíveis;
- Ajustes de agenda;
- Confirmação do atendimento;
- Evitar conflitos e atrasos operacionais.

O cliente não deve conseguir agendar no mesmo horário ou em horários muito próximos do momento da solicitação.

---

## Observação importante

A regra deve funcionar de forma dinâmica e automática, recalculando a disponibilidade toda vez que o cliente acessar ou atualizar a página.
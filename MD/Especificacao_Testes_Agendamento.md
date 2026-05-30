# Especificacao para Testes - Agendamento Massoterapia RJ

## Objetivo

Este documento define o comportamento esperado da aplicacao de agendamento da Massoterapia RJ para orientar a criacao de testes manuais, testes automatizados de interface e testes de integracao.

O escopo cobre a entrada do agendamento pelo site, validacoes de disponibilidade, envio ao n8n, gravacao no CORE PS e acompanhamento pelo painel.

## Fontes de Verdade

- Pagina publica: `agendamento.html`
- Workflow de entrada: `n8n-workflow-agendamento.json`
- Workflow de confirmacao: `n8n-workflow-confirmacao-agendamento.json`
- Painel operacional: `/root/massoterapiarj-painel/src/pages/Agenda.jsx`

## Estado Atual do Produto

No comportamento atual, o pedido enviado pelo site entra no sistema com status inicial `Aprovado`.

Observacao importante para testes: alguns textos da interface ainda usam a ideia de "analise" ou "confirmacao posterior", mas o payload do site e o workflow do n8n gravam `status = Aprovado`. Os testes devem considerar `Aprovado` como comportamento esperado enquanto o produto nao for alterado.

## Fluxo Principal de Entrada

1. O cliente acessa a pagina de agendamento.
2. O cliente seleciona servico, local, data e horario.
3. A pagina consulta a disponibilidade no CORE PS.
4. A pagina consulta regras de disponibilidade dos colaboradores.
5. A pagina exibe apenas horarios com capacidade livre.
6. O cliente informa nome, WhatsApp e, opcionalmente, e-mail, Telegram e observacoes.
7. O cliente pode escolher uma profissional disponivel ou deixar a equipe definir.
8. Ao enviar, a pagina valida novamente horario, capacidade e profissional.
9. A pagina envia o payload para o webhook do n8n.
10. O n8n valida os dados recebidos.
11. O n8n consulta novamente a disponibilidade no CORE PS.
12. Se o horario estiver livre, o n8n grava o agendamento no CORE PS.
13. O n8n prepara notificacoes para Telegram, e-mail e WhatsApp.
14. O n8n responde sucesso para a pagina.
15. O agendamento passa a aparecer no painel operacional.

## Campos do Formulario

Campos obrigatorios:

- `service`: servico selecionado.
- `location`: local do atendimento.
- `date`: data do atendimento.
- `time`: horario do atendimento.
- `name`: nome completo do cliente.
- `whatsapp`: WhatsApp do cliente.

Campos opcionais:

- `email`: e-mail do cliente.
- `telegram`: usuario Telegram do cliente.
- `notes`: observacoes do cliente.
- `profissional_solicitada`: profissional escolhida pelo cliente.

Campos gerados pela aplicacao:

- `id_agendamento`: identificador no formato `MRJ-{timestamp}`.
- `telefone`: mesmo valor de `whatsapp`.
- `duracao_media`: duracao do servico selecionado ou `50`.
- `valor_referencia`: preco do servico, quando existir.
- `status`: sempre `Aprovado` no fluxo atual.
- `origem`: `site_massoterapiarj`.
- `criado_em`: data/hora ISO no navegador.

## Regras de Disponibilidade

### Fuso Horario

Todas as validacoes de horario devem usar o fuso `America/Sao_Paulo`.

### Antecedencia Minima

O sistema exige no minimo 70 minutos de antecedencia.

Criterios de teste:

- Data anterior ao dia atual deve ser rejeitada ou nao exibida.
- Horario do dia atual com menos de 70 minutos de antecedencia deve ser rejeitado.
- Horario futuro com 70 minutos ou mais deve ser permitido se houver capacidade.

### Duracao e Intervalo

- Duracao padrao da sessao: 50 minutos.
- Horarios sao gerados em intervalos de 30 minutos.
- Um horario so pode aparecer se a sessao couber dentro do bloco de escala.

### Escala Oficial Atual

A pagina possui escala fixa para datas especificas:

- `2026-05-28`: 12:00 as 20:30, profissionais Ellaine e Selma.
- `2026-05-29`: 12:00 as 14:00, profissional Amanda.
- `2026-05-29`: 14:00 as 20:30, profissionais Amanda e Diana.
- `2026-05-30`: 09:00 as 19:00, profissional Diana.

Para datas sem escala oficial cadastrada no arquivo, a pagina deve mostrar ausencia de atendimento.

### Capacidade por Horario

A capacidade de um horario corresponde a quantidade de profissionais disponiveis no bloco.

Um horario deve ser ocultado quando:

- nao existe bloco de escala para o horario;
- todos os profissionais do bloco estao ocupados;
- regras de disponibilidade removem todos os profissionais livres.

## Consultas de Disponibilidade

Ao selecionar ou alterar uma data, a pagina deve chamar:

```text
GET /coreps-api/agendamentos/disponibilidade?data={YYYY-MM-DD}&local={local}
```

Resposta esperada:

- `horarios_ocupados`: lista de horarios bloqueados.
- `registros`: lista usada para contar quantos agendamentos existem por horario.

Tambem deve chamar:

```text
GET /coreps-api/agendamentos/colaboradores-disponibilidade?data={YYYY-MM-DD}
```

Resposta esperada:

- `registros`: regras de disponibilidade ou indisponibilidade de colaboradores.

Se alguma consulta falhar, a pagina pode continuar exibindo horarios calculados localmente, mas deve mostrar aviso de que nao foi possivel consultar a agenda completa.

## Envio ao Webhook

Endpoint:

```text
POST https://n8n.iaguru.com.br/webhook/massoterapiarj-agendamento
```

Headers:

```text
Content-Type: application/json
```

Payload minimo esperado:

```json
{
  "id_agendamento": "MRJ-0000000000000",
  "nome_cliente": "Cliente Teste",
  "telefone": "(21) 99999-9999",
  "whatsapp": "(21) 99999-9999",
  "email": "cliente@example.com",
  "telegram": "@cliente",
  "servico": "Servico",
  "duracao_media": 50,
  "valor_referencia": null,
  "data_agendada": "2026-05-29",
  "hora_agendada": "14:00",
  "local": "Av. Princesa Isabel, 323 - sala 1007, Copacabana",
  "observacoes_cliente": "Observacao do cliente",
  "profissional_solicitada": "Amanda",
  "status": "Aprovado",
  "origem": "site_massoterapiarj",
  "criado_em": "2026-05-28T00:00:00.000Z"
}
```

## Respostas Esperadas do Webhook

### Sucesso

Status HTTP esperado:

```text
201
```

Corpo esperado:

```json
{
  "sucesso": true,
  "mensagem": "Pedido recebido com sucesso e aprovado no sistema.",
  "status": "Aprovado",
  "agendamento": {}
}
```

Comportamento na interface:

- O botao deve voltar para `Enviar pedido de agendamento`.
- O formulario deve ser limpo.
- A pagina deve mostrar mensagem de sucesso.
- O payload deve ser salvo em `localStorage` na chave `mrj_schedule_requests`.

### Horario Indisponivel

Status HTTP esperado:

```text
409
```

Corpo esperado:

```json
{
  "sucesso": false,
  "erro": "Horario indisponivel para esta data.",
  "status": "Indisponivel",
  "horarios_ocupados": []
}
```

Comportamento na interface:

- A pagina deve mostrar erro de horario indisponivel.
- A lista de horarios deve ser atualizada.
- O cliente deve conseguir escolher outro horario.

### Erro de Integracao

Quando o webhook falhar por erro diferente de `409`:

- A pagina deve salvar o payload localmente.
- A pagina deve mostrar erro indicando que o pedido foi salvo localmente, mas nao enviado.
- O teste deve verificar a chave `mrj_schedule_requests` no `localStorage`.

## Validacoes no n8n

O workflow de entrada deve rejeitar:

- nome vazio;
- servico vazio;
- data vazia;
- horario vazio;
- ausencia de todos os contatos;
- horario passado;
- horario com menos de 70 minutos de antecedencia.

O workflow deve normalizar:

- `nome_cliente` a partir de `nome_cliente`, `name` ou `nome`;
- `telefone` a partir de `telefone`, `phone` ou `whatsapp`;
- `servico` a partir de `servico` ou `service`;
- `data_agendada` a partir de `data_agendada` ou `date`;
- `hora_agendada` a partir de `hora_agendada` ou `time`;
- `local` a partir de `local` ou `location`;
- `observacoes_cliente` a partir de `observacoes_cliente` ou `notes`.

## Gravacao no CORE PS

Se o horario estiver disponivel, o n8n deve enviar:

```text
POST http://coreps_api:3001/api/agendamentos/public
```

Headers:

```text
x-agendamentos-token: ${AGENDAMENTOS_API_TOKEN}
content-type: application/json
```

O corpo enviado deve ser o payload validado pelo n8n.

## Notificacoes

### Telegram

Quando `TELEGRAM_BOT_TOKEN` e `TELEGRAM_CHAT_IDS` ou `TELEGRAM_CHAT_ID` estiverem configurados:

- deve ser enviada mensagem para cada chat configurado;
- a mensagem deve conter codigo, cliente, contato, servico, data, horario, local e status.

Falha no envio de Telegram nao deve impedir a resposta de sucesso do agendamento.

### E-mail do Cliente

Quando o cliente informar e-mail:

- o workflow deve enviar e-mail HTML;
- o assunto esperado e `Recebemos seu pedido de agendamento - Massoterapia RJ`;
- o corpo deve conter codigo, servico, data, horario, local e contato informado.

### WhatsApp do Cliente

Quando `WHATSAPP_API_URL`, `WHATSAPP_API_TOKEN` e telefone do cliente estiverem disponiveis:

- o workflow deve normalizar o telefone para formato com DDI `55`, quando aplicavel;
- deve enviar mensagem contendo codigo, servico, data, horario, local e status.

Falha no envio de WhatsApp nao deve impedir a resposta de sucesso do agendamento.

## Painel Operacional

O painel deve:

- listar agendamentos via `GET /painel/api/agendamentos`;
- filtrar por status;
- filtrar por data;
- atualizar automaticamente a agenda do dia a cada 30 segundos;
- carregar regras de disponibilidade dos colaboradores;
- abrir modal de detalhe do agendamento;
- permitir alterar status, data, horario, local, colaborador e observacoes internas;
- salvar alteracoes via `PUT /painel/api/agendamentos/{id}/status`;
- permitir copiar aviso para colaborador;
- abrir WhatsApp com mensagem pronta para colaborador.

Status suportados no painel:

- `Pendente`
- `Aprovado`
- `Recusado`
- `Reagendado`
- `Cancelado`
- `Concluido`
- `Nao compareceu`

Para calculo de horario livre no painel, os status abaixo devem contar como livres:

- `Cancelado`
- `Recusado`
- `Nao compareceu`

## Fluxo de Confirmacao/Atualizacao

Endpoint:

```text
POST https://n8n.iaguru.com.br/webhook/massoterapiarj-confirmacao-agendamento
```

Header de seguranca:

```text
x-agendamentos-token: ${AGENDAMENTOS_API_TOKEN}
```

Comportamento esperado:

1. Validar token quando `AGENDAMENTOS_API_TOKEN` existir.
2. Preparar texto de Telegram com dados atualizados.
3. Enviar Telegram se configurado.
4. Enviar e-mail ao cliente se houver e-mail.
5. Responder sucesso com `Confirmacao processada.`

Resposta esperada:

```json
{
  "sucesso": true,
  "mensagem": "Confirmacao processada."
}
```

## Cenarios Minimos de Teste

### Interface Publica

- Deve carregar lista de servicos.
- Deve impedir envio sem campos obrigatorios.
- Deve impedir horario com menos de 70 minutos.
- Deve ocultar horarios sem escala.
- Deve ocultar horarios sem capacidade.
- Deve permitir envio com profissional definida.
- Deve permitir envio sem profissional definida.
- Deve exibir erro quando o webhook responde `409`.
- Deve salvar localmente quando o webhook falha.
- Deve limpar formulario apos sucesso.

### n8n - Entrada

- Deve aceitar payload valido.
- Deve rejeitar payload sem nome.
- Deve rejeitar payload sem servico.
- Deve rejeitar payload sem data.
- Deve rejeitar payload sem horario.
- Deve rejeitar payload sem contato.
- Deve rejeitar horario passado.
- Deve rejeitar horario com menos de 70 minutos.
- Deve responder `409` quando CORE PS informa horario ocupado.
- Deve gravar no CORE PS quando horario esta livre.

### Painel

- Deve listar agendamentos.
- Deve filtrar por data.
- Deve filtrar por status.
- Deve abrir detalhe do agendamento.
- Deve salvar alteracao de status.
- Deve salvar alteracao de colaborador.
- Deve atualizar agenda do dia.
- Deve montar mensagem de WhatsApp do colaborador.

### Confirmacao

- Deve rejeitar token invalido quando token estiver configurado.
- Deve responder sucesso com token valido.
- Deve enviar Telegram quando configurado.
- Deve enviar e-mail quando cliente tem e-mail.

## Criterios Gerais de Aceite

- Nenhum teste deve depender de alteracao direta em producao.
- Testes de integracao devem usar dados identificados como teste.
- Testes devem validar status `Aprovado` como comportamento atual da entrada.
- Testes devem cobrir concorrencia basica: horario livre na tela, mas ocupado no momento do envio.
- Falhas de notificacao nao devem bloquear a criacao do agendamento quando o registro ja foi salvo no CORE PS.
- Mensagens exibidas ao cliente devem ser coerentes com o resultado da operacao.


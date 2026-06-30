# Registro de alterações - disponibilidade centralizada

Data: 16/06/2026  
Projeto: Massoterapia RJ  
Objetivo: garantir que o painel e o site público exibam exatamente o mesmo resultado de disponibilidade.

## Regra definida

O que for alterado no painel deve aparecer da mesma forma para o cliente no site público.

Regra fundamental:

```text
Painel e site público devem exibir o mesmo resultado calculado pela API.
```

## Problema identificado

Antes da alteração, o painel e o site público consultavam dados parecidos, mas cada um calculava disponibilidade por conta própria.

Isso causava risco de divergência em casos como:

- bloqueio parcial de horário;
- colaborador indisponível;
- substituição de colaborador;
- horário com todos os profissionais bloqueados;
- diferença entre escala local do painel, escala do site público e escala do backend.

## Solução aplicada

Foi criado um endpoint central no backend para calcular o resultado final da disponibilidade.

Novo endpoint:

```http
GET /api/agendamentos/horarios-disponiveis?data=YYYY-MM-DD&local=...&duracao=50
```

Esse endpoint considera:

- escala oficial;
- bloqueios cadastrados no painel;
- liberações cadastradas no painel;
- substituições;
- agendamentos já ocupados;
- duração da sessão;
- profissionais livres e ocupados por horário.

## Backend Core PS

Repositório:

```text
/root/core-ps
```

Arquivo alterado:

```text
backend/src/routes/agendamentos.js
```

Foi criado o cálculo central:

```js
calcularHorariosDisponiveis()
```

Funções auxiliares criadas:

```js
buscarRegrasDisponibilidade()
regraAfetaHorario()
aplicarRegrasDisponibilidade()
profissionaisLivresNoHorario()
buscarAgendamentosBloqueantes()
minutesToTime()
```

Rota criada:

```http
GET /api/agendamentos/horarios-disponiveis
```

Commit:

```text
6cf442c - Adiciona endpoint central de horarios disponiveis
```

## Site público

Repositório:

```text
/root/massoterapiarj
```

Arquivo alterado:

```text
agendamento.html
```

O site público passou a consultar:

```http
GET /coreps-api/agendamentos/horarios-disponiveis
```

Foi adicionada a configuração:

```js
availableSlotsUrl: '/coreps-api/agendamentos/horarios-disponiveis'
```

Foi criada a função:

```js
fetchFinalAvailability()
```

O formulário público agora usa a resposta final da API para:

- montar os horários do select;
- decidir se o horário está disponível;
- listar profissionais disponíveis;
- validar novamente antes de enviar o agendamento.

Também foi atualizado o documento:

```text
MD/Fluxo_Disponibilidade_Colaboradores_Agendamento.md
```

Commit:

```text
9d88b95 - Centraliza disponibilidade do agendamento publico
```

## Painel Massoterapia RJ

Repositório:

```text
/root/massoterapiarj-painel
```

Arquivo alterado:

```text
src/pages/Agenda.jsx
```

O painel passou a consultar:

```http
GET /painel/api/agendamentos/horarios-disponiveis
```

Foi criada a função:

```js
carregarHorariosDisponiveis()
```

O quadro da agenda do painel agora usa o mesmo resultado final da API para exibir:

- horários livres;
- horários sem atendimento;
- profissionais livres;
- profissionais ocupados;
- efeitos dos bloqueios e substituições.

Commit:

```text
ac2305e - Usa disponibilidade central no painel
```

## Build e publicação do painel

Foi executado:

```bash
npm run build
```

Bundle gerado e publicado:

```text
/root/massoterapiarj/painel/assets/index-BWC8krff.js
```

Arquivo de entrada atualizado:

```text
/root/massoterapiarj/painel/index.html
```

O `index.html` passou a apontar para:

```html
<script type="module" crossorigin src="/painel/assets/index-BWC8krff.js"></script>
```

## Deploy da API

A API `coreps_api` foi reconstruída e reiniciada:

```bash
docker compose up -d --build coreps_api
```

Serviço validado:

```text
coreps_api
```

## Validações feitas

### Sintaxe do backend

```bash
node --check /root/core-ps/backend/src/routes/agendamentos.js
```

Resultado: sem erro.

### Build do painel

```bash
npm run build
```

Resultado: build concluído com sucesso.

### Endpoint público

Validado:

```http
https://www.massoterapiarj.com.br/coreps-api/agendamentos/horarios-disponiveis?data=2026-06-16&duracao=50&local=Av.%20Princesa%20Isabel,%20323%20-%20sala%201007,%20Copacabana
```

Resultado: endpoint respondeu com escala, regras e horários calculados.

### Página pública

Validado:

```http
https://www.massoterapiarj.com.br/agendamento.html
```

Resultado: página servida já contém:

```js
availableSlotsUrl: '/coreps-api/agendamentos/horarios-disponiveis'
fetchFinalAvailability()
```

### Mobile x desktop

Foi testado com Playwright:

- Desktop: `1365x900`
- Mobile: `390x844`

Resultado para `16/06/2026` e serviço `Massagem Terapêutica`:

```text
Desktop: ❌ Sem Atendimento
Mobile:  ❌ Sem Atendimento
```

O status exibido também foi igual nas duas versões.

## Resultado final

Depois da alteração:

```text
Painel -> salva bloqueio/liberação
API -> calcula disponibilidade final
Painel -> exibe resultado da API
Site público -> exibe resultado da API
Cliente -> vê o mesmo resultado do painel
```

## Observações

Os endpoints antigos continuam existindo:

```http
GET /api/agendamentos/disponibilidade
GET /api/agendamentos/colaboradores-disponibilidade
```

Eles permanecem úteis para compatibilidade e histórico, mas a decisão final de mostrar ou esconder horário deve vir do endpoint:

```http
GET /api/agendamentos/horarios-disponiveis
```

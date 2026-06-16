# Fluxo de disponibilidade dos colaboradores no agendamento online

Data da análise: 16/06/2026  
Ambientes analisados:

- Painel: `https://www.massoterapiarj.com.br/painel/#disponibilidade-colaboradores`
- Cliente: `https://www.massoterapiarj.com.br/agendamento.html`
- Código do painel: `/root/massoterapiarj-painel/src/pages/Agenda.jsx`
- Código do agendamento público: `/root/massoterapiarj/agendamento.html`
- API: `/root/core-ps/backend/src/routes/agendamentos.js`

## Objetivo do fluxo

Quando a equipe bloqueia ou libera um colaborador no painel, o site de agendamento do cliente deve refletir isso imediatamente.

Exemplos esperados:

- Se Diana é bloqueada em um horário em que só Diana atende, esse horário deve aparecer como sem atendimento para o cliente.
- Se Ellaine é bloqueada, ela deve sumir da lista de profissionais disponíveis naquele horário.
- Se uma substituta for informada, a profissional bloqueada deve sair e a substituta deve entrar.
- Se todos os profissionais de um horário forem bloqueados ou estiverem ocupados, o horário não deve ser oferecido ao cliente.

## Fluxo no painel

No painel, a seção `Disponibilidade dos Colaboradores` usa a data selecionada no topo da agenda.

Campos usados no cadastro:

- Data
- Horário inicial
- Horário final
- Funcionário
- Disponível hoje: `Sim` ou `Não`
- Substituir por
- Motivo
- Observações

Ao clicar em `Registrar alteração`, o painel envia:

```http
POST /painel/api/agendamentos/colaboradores-disponibilidade
```

Payload enviado pelo painel:

```json
{
  "data": "2026-06-16",
  "hora_inicio": "13:00",
  "hora_fim": "14:00",
  "funcionario": "Selma",
  "disponivel": false,
  "substituto": null,
  "motivo": "",
  "observacoes": "Casal"
}
```

A API grava essa regra na tabela:

```sql
colaborador_disponibilidade
```

Depois de salvar, o painel consulta novamente:

```http
GET /painel/api/agendamentos/colaboradores-disponibilidade?data=YYYY-MM-DD
```

E mostra o resultado em duas áreas:

- `Controle visual na agenda`
- `Histórico de alterações`

## Fluxo na página do cliente

Quando o cliente acessa `agendamento.html`, a página pública monta os horários disponíveis usando três fontes:

1. Escala oficial do dia.
2. Agendamentos já ocupados.
3. Regras de disponibilidade/bloqueio dos colaboradores.

As consultas feitas pela página são:

```http
GET /coreps-api/agendamentos/disponibilidade?data=YYYY-MM-DD&local=...
GET /coreps-api/agendamentos/colaboradores-disponibilidade?data=YYYY-MM-DD
```

O primeiro endpoint retorna agendamentos já ocupados e escala oficial:

```json
{
  "escala_oficial": [
    {
      "inicio": "09:00",
      "fim": "15:30",
      "profissionais": ["Diana"]
    }
  ],
  "registros": [
    {
      "hora": "10:30",
      "colaborador": "Diana",
      "duracao_media": 50,
      "total": 1
    }
  ]
}
```

O segundo endpoint retorna os bloqueios e liberações registrados pelo painel:

```json
{
  "data": "2026-06-16",
  "registros": [
    {
      "id": 127,
      "data": "2026-06-16",
      "hora_inicio": "13:00",
      "hora_fim": "14:00",
      "funcionario": "Ellaine",
      "disponivel": false,
      "substituto": null,
      "observacoes": "Casal"
    }
  ]
}
```

Depois disso, a página do cliente:

1. Gera os horários possíveis com base na escala oficial.
2. Remove horários que não têm profissional livre.
3. Mostra o cartão de profissionais disponíveis para o horário selecionado.
4. Obriga o cliente a escolher uma profissional, exceto quando só existe uma profissional livre, caso em que ela é selecionada automaticamente.
5. Antes de enviar, consulta a API novamente para evitar agendamento em horário que acabou de ficar indisponível.

## Resultado esperado para o cliente

Quando o bloqueio funciona corretamente, o cliente vê apenas horários com capacidade real.

Exemplo:

Escala oficial:

```text
13:00 - 14:00
Ellaine
Selma
```

Bloqueios registrados:

```text
13:00 - 14:00
Ellaine bloqueada
Selma bloqueada
```

Resultado esperado em `agendamento.html`:

```text
13:00 não deve aparecer como horário disponível
```

Se houver apenas um bloqueio:

```text
13:00 - 14:00
Ellaine bloqueada
Selma livre
```

Resultado esperado:

```text
13:00 aparece disponível
Profissional selecionada automaticamente: Selma
```

Se houver substituta:

```text
13:00 - 14:00
Ellaine bloqueada
Substituta: Amanda
```

Resultado esperado:

```text
Ellaine não aparece
Amanda aparece como disponível
```

## Regras reais encontradas em 16/06/2026

Consulta feita na API:

```http
GET /coreps-api/agendamentos/colaboradores-disponibilidade?data=2026-06-16
```

Regras retornadas:

| Horário | Funcionário | Status | Observação |
|---|---|---|---|
| 09:00-15:30 | Diana | Indisponível | Diana indisponível de 15 a 20/06/2026 |
| 11:00-12:00 | Ellaine | Indisponível | - |
| 11:30-20:30 | Selma | Disponível | Disponibilidade ampliada |
| 13:00-14:00 | Ellaine | Indisponível | Casal |
| 13:00-14:00 | Selma | Indisponível | Casal |
| 14:15-15:15 | Ellaine | Indisponível | José Paulo |
| 19:00-20:30 | Selma | Indisponível | - |

Isso significa que a API está retornando os bloqueios cadastrados. O problema tende a estar na interpretação desses dados pelo painel, pela página pública, ou na diferença entre versão publicada e código esperado.

## Diferença importante entre painel e cliente

Existe uma diferença de regra entre o painel e a página pública.

No painel, uma regra só afeta um horário se a sessão inteira couber dentro do intervalo bloqueado.

Lógica do painel:

```js
horarioMin >= inicioMin && horarioMin + SESSION_MIN <= fimMin
```

Exemplo com sessão de 50 minutos:

```text
Bloqueio: 14:15-15:15
Horário: 14:30
Sessão: 14:30-15:20
Resultado no painel: não considera bloqueado, porque 15:20 passa de 15:15
```

Na página pública, uma regra afeta o horário quando o início do horário está dentro do intervalo.

Lógica do site:

```js
timeValue >= hora_inicio && timeValue < hora_fim
```

Exemplo:

```text
Bloqueio: 14:15-15:15
Horário: 14:30
Resultado no cliente: considera bloqueado
```

Essa diferença pode fazer o painel mostrar uma coisa e o cliente enxergar outra.

## Diferença de escala oficial

Também existe diferença entre as escalas fixas do painel, da página pública e do backend.

No painel e na página pública aparecem datas específicas de 15/06/2026 a 20/06/2026.

No backend, a escala específica cadastrada atualmente aparece apenas para:

- 2026-06-16
- 2026-06-17

Para outras datas, o backend usa a escala semanal padrão.

Isso pode causar divergência quando:

- o painel usa uma escala local hardcoded;
- o cliente recebe escala vinda da API;
- o backend não tem a mesma escala específica usada no painel.

## Ponto crítico de publicação

O painel publicado em `/root/massoterapiarj/painel/assets/index-BAgMAqD8.js` contém a lógica nova de `sem atendimento` e disponibilidade dinâmica.

Mas existem vários bundles antigos em:

```text
/root/massoterapiarj/painel/assets/
```

O `index.html` atual aponta para:

```html
<script type="module" crossorigin src="/painel/assets/index-BAgMAqD8.js"></script>
```

Se o navegador estiver usando cache antigo, ou se o proxy estiver servindo bundle antigo, o painel pode parecer diferente do código atual.

A página `agendamento.html` tem cache desativado no nginx:

```nginx
location = /agendamento.html {
    add_header Cache-Control "no-cache, no-store, must-revalidate" always;
}
```

Mas arquivos `.js` e `.css` recebem cache longo:

```nginx
location ~* \.(?:css|js|jpg|jpeg|gif|png|webp|svg|ico|woff2?)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

Como o JavaScript do `agendamento.html` está inline, isso reduz risco de cache para a regra principal da página pública. No painel, o bundle é externo e pode sofrer cache se o HTML antigo ainda apontar para asset antigo.

## Diagnóstico provável

O fluxo existe e a API está retornando os bloqueios do painel.

Os problemas mais prováveis são:

1. O painel e o cliente não usam exatamente a mesma regra para decidir se um bloqueio afeta um horário.
2. A escala oficial não está centralizada em um único lugar.
3. O painel depende de bundle React externo e pode haver versão antiga em cache.
4. O cliente só esconde o horário se todos os profissionais ficarem indisponíveis ou ocupados; se ainda existir uma profissional livre, o horário continua aparecendo.
5. Bloqueios parciais, como `14:15-15:15`, podem gerar resultados diferentes para slots de 30 minutos e sessões de 50 minutos.

## Fluxo recomendado

Para o comportamento ficar igual no painel e no cliente, a regra deveria ser centralizada.

Fluxo ideal:

```text
Painel salva bloqueio
        ↓
API grava em colaborador_disponibilidade
        ↓
API calcula profissionais disponíveis por horário
        ↓
Painel consome o cálculo da API
        ↓
Agendamento público consome o mesmo cálculo da API
        ↓
Cliente só vê horários realmente disponíveis
```

Ou seja: o painel e o site público não deveriam recalcular disponibilidade com regras próprias em JavaScript. Ambos deveriam receber da API a lista final de horários e profissionais disponíveis.

## Correção técnica sugerida

Criar ou ajustar um endpoint da API para retornar a disponibilidade final já calculada:

```http
GET /api/agendamentos/horarios-disponiveis?data=YYYY-MM-DD&local=...
```

Resposta esperada:

```json
{
  "data": "2026-06-16",
  "horarios": [
    {
      "hora": "13:00",
      "disponivel": false,
      "profissionais_livres": [],
      "motivo": "Sem Atendimento"
    },
    {
      "hora": "15:30",
      "disponivel": true,
      "profissionais_livres": ["Selma"]
    }
  ]
}
```

Depois:

- Painel usa esse endpoint para mostrar `Agenda do dia`.
- Página pública usa esse endpoint para montar o select de horários.
- A validação do envio também usa esse endpoint ou a mesma função interna do backend.

## Checklist de validação

Para validar um bloqueio feito no painel:

1. Criar bloqueio no painel em `Disponibilidade dos Colaboradores`.
2. Confirmar que a API retorna o bloqueio:

```http
GET /coreps-api/agendamentos/colaboradores-disponibilidade?data=YYYY-MM-DD
```

3. Abrir `agendamento.html` em janela anônima.
4. Escolher a mesma data do bloqueio.
5. Verificar se o horário sumiu quando todos os profissionais estão indisponíveis.
6. Verificar se o card de profissionais não mostra o colaborador bloqueado.
7. Testar envio no mesmo horário para confirmar que a validação final bloqueia a tentativa.

## Conclusão

O painel já grava os bloqueios e a página pública já consulta os bloqueios.

A divergência acontece porque painel, página pública e backend ainda dividem a responsabilidade de calcular disponibilidade. Como cada parte usa uma regra parecida, mas não idêntica, o cliente pode ver um resultado diferente do painel.

A solução correta é centralizar o cálculo final de horários e profissionais disponíveis na API e fazer painel e site público apenas exibirem esse resultado.

## Atualização aplicada em 16/06/2026

A recomendação foi aplicada.

Novo endpoint central:

```http
GET /api/agendamentos/horarios-disponiveis?data=YYYY-MM-DD&local=...&duracao=50
```

Esse endpoint agora calcula o resultado final usando:

- escala oficial;
- bloqueios/liberações cadastrados no painel;
- substituições;
- agendamentos já ocupados;
- duração da sessão.

O site público `agendamento.html` passou a consultar:

```http
GET /coreps-api/agendamentos/horarios-disponiveis
```

O painel também passou a consultar:

```http
GET /painel/api/agendamentos/horarios-disponiveis
```

Regra fundamental após a alteração:

```text
O painel e o site público exibem o mesmo resultado calculado pela API.
```

Os endpoints antigos continuam existindo para compatibilidade e histórico:

```http
GET /api/agendamentos/disponibilidade
GET /api/agendamentos/colaboradores-disponibilidade
```

Mas a decisão final de mostrar ou ocultar horário deve vir do endpoint `horarios-disponiveis`.

# Plano de Reestruturação do Site --- Massoterapia RJ

## Objetivo

Reestruturar o site **Massoterapia RJ** para que as principais áreas
deixem de funcionar apenas como seções de uma página única e passem a
possuir **páginas e URLs próprias**.

A mudança tem como objetivo facilitar:

-   compartilhamento de links específicos;
-   divulgação pelo WhatsApp, Instagram e outras redes;
-   campanhas e anúncios;
-   indexação e organização para mecanismos de busca;
-   navegação direta para conteúdos específicos.

> **IMPORTANTE:** este projeto é uma reestruturação da arquitetura do
> site, **não um redesign**.

------------------------------------------------------------------------

## 1. Restrições obrigatórias

### 1.1. Página de agendamento --- NÃO MODIFICAR

A página abaixo deve permanecer **integralmente fora de qualquer
modificação**:

`https://www.massoterapiarj.com.br/agendamento.html`

O arquivo `agendamento.html` é considerado **protegido/intocável**.

Não modificar:

-   HTML;
-   CSS específico da página;
-   JavaScript;
-   scripts;
-   integrações;
-   formulários;
-   lógica de agendamento;
-   layout;
-   textos;
-   cores;
-   fontes;
-   comportamento responsivo;
-   qualquer outro componente relacionado ao funcionamento atual.

As alterações realizadas no restante do site também **não podem afetar
indiretamente** o funcionamento ou a aparência de `agendamento.html`.

O botão **AGENDAR** das novas páginas deverá continuar direcionando
para:

`/agendamento.html`

------------------------------------------------------------------------

## 2. Identidade visual --- PRESERVAR INTEGRALMENTE

Não alterar os padrões visuais existentes no site.

Devem ser mantidos:

-   paleta de cores atual;
-   cores de fundo;
-   cores dos textos;
-   fontes;
-   tipografia;
-   tamanhos e estilos das letras;
-   hierarquia visual;
-   padrão dos títulos;
-   botões;
-   cards;
-   bordas;
-   espaçamentos;
-   imagens;
-   cabeçalho;
-   menu;
-   rodapé;
-   comportamento responsivo;
-   identidade visual geral.

### Regra principal

**Não criar uma nova identidade visual e não redesenhar o site.**

As novas páginas devem parecer partes naturais do site atual.

O visitante deve perceber a mesma Massoterapia RJ, com o mesmo padrão
visual. A mudança será principalmente na **organização e nas URLs**.

------------------------------------------------------------------------

## 3. Nova estrutura principal

O menu principal deverá trabalhar com páginas independentes:

  Menu          Destino
  ------------- ---------------------
  Início        `/`
  Sobre         `/sobre`
  Serviços      `/servicos`
  Equipe        `/equipe`
  Espaço        `/espaco`
  Depoimentos   `/depoimentos`
  FAQ           `/faq`
  Contato       `/contato`
  Agendar       `/agendamento.html`

### Agendar

**AGENDAR** deve continuar sendo tratado como ação de destaque no menu.

Ele não faz parte da migração de conteúdo e deverá apenas apontar para a
página existente:

`/agendamento.html`

------------------------------------------------------------------------

## 4. Página inicial

A Home continuará sendo a principal porta de entrada do site.

Ela não deve ficar vazia após a separação das páginas.

Deverá manter versões resumidas dos conteúdos mais importantes,
funcionando como uma vitrine e direcionando o visitante para as páginas
internas.

Estrutura sugerida:

### Banner principal

Manter o padrão visual existente.

Ações principais:

-   Agendar sessão;
-   Conhecer os serviços.

### Sobre

Resumo da apresentação da Massoterapia RJ.

Link/botão para:

`/sobre`

### Serviços

Apresentar alguns serviços/técnicas em destaque.

Link/botão para:

`/servicos`

### Equipe

Apresentação resumida dos profissionais.

Link/botão para:

`/equipe`

### Espaço

Apresentação resumida e imagens do espaço.

Link/botão para:

`/espaco`

### Depoimentos

Exibir alguns depoimentos em destaque.

Link/botão para:

`/depoimentos`

### FAQ

Exibir algumas perguntas frequentes.

Link/botão para:

`/faq`

### Contato

Resumo das informações de contato/localização.

Link/botão para:

`/contato`

------------------------------------------------------------------------

## 5. Página Sobre

Criar uma página própria para o conteúdo institucional atualmente
existente no site.

Destino:

`/sobre`

Reutilizar o conteúdo atual sempre que possível.

Não reescrever ou alterar informações institucionais sem necessidade.

------------------------------------------------------------------------

## 6. Página Serviços

Criar:

`/servicos`

Essa será a página principal para apresentação das técnicas, sessões,
duração e valores disponibilizados pela Massoterapia RJ.

O conteúdo atualmente existente deverá ser reaproveitado, preservando o
padrão visual.

### Evolução futura

A estrutura deverá permitir posteriormente páginas individuais para cada
técnica, por exemplo:

-   `/servicos/massagem-terapeutica`
-   `/servicos/deep-tissue`
-   `/servicos/drenagem-linfatica`
-   `/servicos/liberacao-miofascial`
-   `/servicos/shiatsu`
-   `/servicos/massagem-relaxante`
-   `/servicos/massagem-desportiva`
-   `/servicos/thai-massagem`
-   `/servicos/new-seitai`
-   `/servicos/reflexologia-podal`

A criação dessas páginas individuais poderá ser realizada em uma segunda
etapa.

------------------------------------------------------------------------

## 7. Página Equipe

Criar:

`/equipe`

A página deverá concentrar a apresentação dos profissionais da equipe.

Preservar:

-   fotografias atuais;
-   enquadramento;
-   biografias;
-   padrão dos cards;
-   identidade visual;
-   responsividade.

------------------------------------------------------------------------

## 8. Página Espaço

Criar:

`/espaco`

Reaproveitar o conteúdo e as imagens existentes atualmente na seção
Espaço.

Manter integralmente o padrão visual já utilizado.

------------------------------------------------------------------------

## 9. Página Depoimentos

Criar:

`/depoimentos`

Concentrar os depoimentos e avaliações atualmente utilizados pelo site.

A Home poderá continuar apresentando uma seleção resumida desses
depoimentos.

------------------------------------------------------------------------

## 10. Página FAQ

Criar:

`/faq`

Transferir/organizar as perguntas e respostas existentes para uma página
própria.

A Home poderá manter algumas das perguntas mais importantes, com acesso
à página completa.

------------------------------------------------------------------------

## 11. Página Contato

Criar:

`/contato`

Concentrar informações como:

-   localização;
-   endereço;
-   formas de contato;
-   WhatsApp;
-   horários;
-   mapa, quando aplicável;
-   acesso ao agendamento.

Manter as informações atualmente válidas no site.

------------------------------------------------------------------------

## 12. Compatibilidade com links antigos

Não quebrar desnecessariamente links que já possam estar:

-   indexados no Google;
-   publicados no Instagram;
-   enviados pelo WhatsApp;
-   cadastrados no Google Business Profile;
-   presentes em anúncios;
-   salvos por clientes.

Links antigos baseados em âncoras, como:

`/#tecnicas`

`/#equipe`

`/#espaco`

devem ter sua compatibilidade avaliada.

Sempre que tecnicamente possível, direcionar o visitante para a nova
página correspondente sem prejudicar a navegação.

------------------------------------------------------------------------

## 13. SEO

Cada nova página deverá possuir informações próprias e coerentes de SEO,
incluindo quando aplicável:

-   `<title>`;
-   meta description;
-   canonical;
-   Open Graph;
-   estrutura adequada de headings;
-   URL amigável.

Evitar conteúdo duplicado desnecessário entre a Home e as páginas
internas.

A Home deve apresentar resumos; as páginas internas devem apresentar o
conteúdo completo.

------------------------------------------------------------------------

## 14. Compartilhamento

Um dos objetivos principais da mudança é permitir links específicos.

Exemplos:

**Equipe**

`https://www.massoterapiarj.com.br/equipe`

**Serviços**

`https://www.massoterapiarj.com.br/servicos`

**Espaço**

`https://www.massoterapiarj.com.br/espaco`

**FAQ**

`https://www.massoterapiarj.com.br/faq`

Assim, campanhas, mensagens e publicações poderão direcionar o cliente
diretamente ao assunto desejado.

------------------------------------------------------------------------

## 15. Responsividade

Todas as novas páginas devem preservar o comportamento responsivo atual.

Testar obrigatoriamente:

-   desktop;
-   tablet;
-   smartphone.

Não introduzir alterações que prejudiquem o menu, textos, imagens,
botões ou navegação em telas menores.

------------------------------------------------------------------------

## 16. Procedimento de segurança

Antes da implementação:

1.  identificar todos os arquivos envolvidos;
2.  realizar backup dos arquivos que serão modificados;
3.  identificar dependências compartilhadas;
4.  confirmar que nenhuma alteração atingirá `agendamento.html`;
5.  preservar os arquivos necessários para rollback.

Após a implementação:

1.  testar todas as novas páginas;
2.  testar todos os itens do menu;
3.  testar links internos;
4.  testar desktop e dispositivos móveis;
5.  testar o botão **AGENDAR**;
6.  abrir e testar `agendamento.html`;
7.  confirmar que o agendamento continua funcionando exatamente como
    antes;
8.  verificar console e erros HTTP;
9.  confirmar que não houve alteração visual involuntária;
10. somente então considerar a publicação concluída.

------------------------------------------------------------------------

## 17. Regra final de implementação

A prioridade desta tarefa é:

**separar o conteúdo atual em páginas independentes, preservando
integralmente a identidade visual e o funcionamento existente.**

### NÃO FAZER

-   Não redesenhar o site.
-   Não trocar cores.
-   Não trocar fontes.
-   Não alterar tipografia.
-   Não criar outro padrão de layout.
-   Não modificar textos sem necessidade.
-   Não remover funcionalidades existentes sem autorização.
-   Não modificar `agendamento.html`.
-   Não permitir que alterações globais afetem `agendamento.html`.

### FAZER

-   Criar páginas independentes.
-   Preservar o visual atual.
-   Reaproveitar componentes e conteúdos existentes.
-   Criar URLs amigáveis.
-   Melhorar o compartilhamento.
-   Manter a navegação simples.
-   Preservar compatibilidade sempre que possível.
-   Testar tudo antes da conclusão.

------------------------------------------------------------------------

## Estrutura final esperada

``` text
massoterapiarj.com.br/
├── Início
├── sobre
├── servicos
├── equipe
├── espaco
├── depoimentos
├── faq
├── contato
└── agendamento.html   ← PROTEGIDO / NÃO MODIFICAR
```

**Projeto:** Massoterapia RJ\
**Tipo de alteração:** Reestruturação de arquitetura e navegação\
**Redesign:** Não autorizado\
**Página protegida:** `agendamento.html`

# Node.js: criando uma API Rest com Express e MongoDB

## Preparando o ambiente: primeiras instalações

- Node.js
- Visual Studio Code

## Para saber mais: tipos de API

Uma API REST, é um tipo de API extremamente comum em programação web.

O termo REST (representational state transfer ou transferência de estado representacional) representa um padrão para desenvolvimento de APIs web utilizando o protocolo HTTP para transmissão de dados.

Porém, pensando que APIs são interfaces que usamos em programação, existem várias outras formas de integrar programas ou serviços diferentes, que utilizam outros protocolos de comunicação, casos de uso e modos de acesso.

APIs podem ser desenvolvidas para diversos usos, por exemplo:

- Para uso interno de uma empresa, por exemplo, para fornecer dados como um serviço para um sistema maior.
- Para uso “externo”, como quando a API é desenvolvida pela empresa como um produto para ser utilizado por clientes.
- Podem ser abertas e de uso livre, desenvolvidas para uso da comunidade, sendo muito comuns para testes ou projetos de estudo.
- Podem ser de terceiros, como as que utilizamos para integrar serviços externos aos nossos produtos.

Além de usos diversos, as APIs também podem ser desenvolvidas seguindo outras arquiteturas além do REST. Seguem alguns exemplos:

- APIs SOAP: SOAP (Simple Object Access Protocol ou protocolo simples de acesso a objetos) utiliza o formato de dados XML e pode usar HTTP ou outros protocolos na comunicação. É um formato mais antigo que o REST e muito utilizado por aplicações de grande porte, porém mais lento que o REST.
- Event-Driven APIs: APIs orientadas a eventos, ao contrário das APIs REST, não dependem de requisições feitas pelo lado cliente para iniciar a comunicação. Nesse caso, o cliente ou clientes “inscritos” na API se comunicam com ela através de gatilhos de eventos, como, por exemplo, um novo registro de usuário.
- APIs GraphQL: o GraphQL é uma linguagem de consulta (query) de APIs e também um runtime para executar estas consultas. É uma alternativa ao REST que pode se conectar a diversas APIs e bases de dados diferentes e retornar objetos complexos através de uma única requisição.
- APIs gRPC: Remote Procedure Calls (ou chamadas procedurais remotas), desenvolvido pelo Google, é um framework baseado em HTTP2 para comunicação síncrona e assíncrona, que visa facilitar comunicação rápida e simplificada entre diversos serviços.

APIs são assuntos bastante extensos e as tecnologias estão em constante evolução. A partir do modelo REST você pode expandir para o estudo de outros tipos.

## Para saber mais: componentes de um projeto Node.js

Sempre que criamos um projeto Node.js do zero ou começamos a trabalhar em um projeto já existente, o primeiro arquivo que criamos ou que consultamos é o `package.json`.

O arquivo `package.json` é o arquivo principal de qualquer projeto em Node.js. É utilizado como arquivo manifesto, centralizando todas as informações necessárias para entender os componentes de um projeto, por exemplo:

- Bibliotecas e dependências utilizadas em produção e desenvolvimento.
- Scripts utilizados pelo projeto para executar o projeto, como subir servidores, rodar testes, compilar arquivos para produção etc.
- Informações sobre versionamento, repositório do código, contato do time responsável.
- Informações sobre configurações diversas.
- Dados necessários para a publicação do pacote no NPM (gerenciador de pacotes do Node.js).

O `package.json` está estruturado conforme o exemplo abaixo:

```json
{
 "name": "alura-curso-node",
 "version": "1.0.0",
 "description": "Módulo de primeiros passos no curso de Node.js",
 "main": "index.js",
 "scripts": {
   "start": "node index.js",
   "test": "jest"
 },
 "author": "Juliana",
 "license": "ISC",
 "dependencies": {
   "modulo-1": "^1.0.0",
   "modulo-2": "^1.0.3",
   "modulo-3": "^2.1.0"
 },
 "devDependencies": {
   "nodemon": "^2.0.15",
   "jest": "^27.2.1"
 }
}
```

Vamos entender e detalhar alguns desses atributos:

- `name`: é onde se define o nome pelo qual seu módulo será chamado.
- `version`: versão atual do módulo. O NPM utiliza o chamado versionamento semântico (SemVer). Você pode saber mais [sobre versionamento e como ele é utilizado neste artigo](https://www.alura.com.br/artigos/versionamento-semantico-breve-introducao).
- `description`: define o que será este módulo. É ideal que seja uma descrição curta e clara sobre o objetivo principal.
- `main`: define o ponto de entrada da aplicação.
- `scripts`: essa sessão tem alguns scripts pré-definidos, mas você também pode definir os seus personalizados. [Leia sobre scripts no npm Docs](https://docs.npmjs.com/cli/v11/using-npm/scripts) ter mais informações.
- `keywords`: é um array de palavras-chave sobre o projeto.
- `author`: são dados de autoria, podendo conter nome, e-mail, site etc.
- `license`: é a licença escolhida para o projeto. Existem diversas opções de licenças, caso tenha curiosidade você pode conferir [a lista completa de licenças no site do SPDX](https://spdx.org/licenses/).
- `dependencies`: define a lista de pacotes necessários para executar seu projeto num ambiente de produção.
- `devDependencies`: define a lista de pacotes necessários para executar o projeto em um ambiente de desenvolvimento e testes. Existem outras configurações que podem existir nesse arquivo, como repositório do Git, homepage, peerDependencies, entre outras que podem ser visualizadas na [documentação oficial do NPM](https://docs.npmjs.com/cli/v11/configuring-npm/package-json).

## Para saber mais: o que são portas

O que são portas? Também chamadas de portas lógicas, elas são gerenciadas pelo sistema operacional e agem como pontos onde conexões de rede acontecem. Por exemplo, a comunicação com a API que estamos desenvolvendo se dá através da porta 3000.

O número padrão de portas é 65.535. As portas são identificadas por números padronizados e muitas portas estão associadas a processos específicos, por exemplo:

- 5432 é usada para conexão com serviços do banco de dados PostgreSQL.
- 3306/3307 são usadas em conexões com o banco MySQL.
- 587 utilizada para conexões SMTP (Simple Mail Transfer Protocol, o protocolo de envio e recebimento de e-mails).
- 80 é a porta padrão de conexões HTTP, usada pelos navegadores.

## Faça como eu fiz: revisando a criação do servidor

No arquivo server.js:

- Importe o módulo http.
- Defina uma constante PORT com o valor 3000.
- Crie um servidor HTTP utilizando a função createServer.
- Dentro da função de callback de createServer, defina as variáveis req e res.
- Escreva o cabeçalho da resposta utilizando o método writeHead de res. O status deve ser 200 e o tipo de conteúdo deve ser text/plain.
- Termine a resposta utilizando o método end de res. O conteúdo deve ser "Curso de Node.js".
- No final do arquivo, chame o método listen de server passando a constante PORT como argumento e uma função de callback que imprime servidor escutando! no console.

### Referências:

- [Markdown](https://www.markdownguide.org/)
- [Nodejs](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)
- [REST: Conceito e fundamentos](https://www.alura.com.br/artigos/rest-conceito-e-fundamentos)
- [Um guia para importação e exportação de módulos com JavaScript](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript)
- [Async/await no JavaScript: o que é e quando usar a programação assíncrona?](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)
- [Site oficial do Express](https://expressjs.com/)
- [Códigos de resposta HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
- [Artigo "Desmistificando o protocolo HTTP"](https://www.alura.com.br/artigos/http)

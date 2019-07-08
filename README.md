# Teste para desenvolvedor Backend

## Por que trabalhar na ENG?

A ENG é uma startup que cria soluções e produtos integrando seu hardware com o software, nossos projetos se baseiam no desenvolvimento de hardware, sistemas embarcados entre outros.

Atuamos no desenvolvimento de produtos nos mais variados segmentos como Agronegócio, Automotivo, Energia, IoT, Telecomunicações entre outros, em empresas de diversas áreas de atuação

Quer conhecer mais sobre a empresa? https://engtecnologia.com/

## Sobre a vaga

Queremos um desenvolvedor backend para nos ajudar a inovar com soluções completas a nível de hardware e software que acarretam em um melhor estilo de vida para nossos clientes e promovendo assim a inovação e sustentabilidade nos nossos projetos.

O dia-a-dia do desenvolvedor será trabalhar junto com a equipe na elaboração e melhorias de algumas rotinas do sistema.

O desenvolvedor irá trabalhar em vários projetos de diferentes escopos, se você não se sente intimidado por novos desafios e adora se reinventar e usar a criatividade, então essa vaga é pra você.

Os requisitos são:

## Requisitos
* Ter disponibilidade para trabalhar em Campo Grande/MS.
* Ter excelente comunicação.
* Conhecer metodologias ágeis.
* Ter experiência nos seguintes itens:
	* NodeJs+ (ECMAScript 6)
  * Mongo
  * Linux Básico
  * Documentação e boas práticas de API's RestFull
  * Git
* Diferenciais:
  * Typescript
  * Docker
  * Integração e Deploy contínuo
  * Testes unitários

## Tecnologias para o desafio
* Node.js
* Mongoose (ODM para mongo)
* Framework de documentação de API (Swagger ou similares)

## O Desafio:

Você deverá criar uma **API REST** que possa cadastrar fazendas, lotes e associar um ou mais lotes a uma fazenda. Deve também ser possível consultar a lista de todos os lotes (paginação será um diferencial) e também apenas uma fazenda por Nome. A consulta de fazendas deve retornar um Json igual o abaixo.

Retorno da consulta da fazenda
```json
{
  "id": Long,
  "nome": String,
  "endereco": String,
  "lotes": Array de ObjectId (relacionamento 1 para n do mongo),
  "createdAt": Date,
  "updatedAt": Date
}
```

Lote
```json
{
  "nome": String,
  "fazenda": ObjectId,
  "quantAnimais": Number,
  "createdAt": Date,
  "updatedAt": Date
}
```

**É importante que as entradas sejam validadas**

## Como devo entregar o desafio?
* Crie uma branch a partir da branch master deste respositório.
* Implemente o código do desafio.
* Faça um push de sua branch com o desafio implementado.
* Crie um pull request para branch master.
* Envie um email para (contato@engtecnologia.com) com o nome de sua branch informando que você concluiu o projeto.

## Restou alguma dúvida?
Você pode enviar um email para: contato@engtecnologia.com
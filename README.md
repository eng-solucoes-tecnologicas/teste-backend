# teste-backend
Teste para vaga de desenvolvedor backend para a ENG

* A arquitetura da api é baseada em MVC com separação entre a layer de serviço e a layer de controle. 
* Foi aplicado padrão DTO na layer de serviço do CRUD facilitando a tratativa da resposta ao frontend. 
* As operações de CRUD no MongoDB foram implementadas como micro-serviço. Juntamente com a arquitetura, o frontend tem acesso apenas à layer de controle, que por sua vez consome o serviço internamente. 
* As rotas e as controllers foram componentizadas com consign para facilitar a implementação de autenticação posteriormente.

## Swagger 

* Uma documentação simples está disponível no arquivo swagger.yml 

## /fazendas 

* Metodos: POST, GET, DELETE, UPDATE 

### parâmetros
  * nome: GET /fazendas?nome= 
    * 200 - Retorna a fazenda com o nome especificado 
    * 400 - Nome não deve estar em branco 
    * 500 - Erro interno
    
  * page & max : GET /fazendas?page=x&max=y 
    * 200 - Retorna as fazendas na pagina x , contando y por pagina 
    * 400 - parametros devem ser informados 
    * 500 - erro interno 

## /lotes

* Metodos: POST, GET, DELETE, UPDATE 

### Corpo 
  
  * POST
  * application/json: {
      * "_nome": "any"
      * "_endereco": "any"
      * "_fazenda": "any"
  * }
  
  * DELETE 
  * application/json: {
    * "_id": "any"
  * }
  
  * UPDATE 
  
  * application/json: {
    * "_id": "any"
    * ...paramsToUpdate
  * }

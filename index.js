/* 
*  Description: Entry Point para ENG backend API CRUD de fazendas e lotes
*  Author: Carlos Cunha 
*  Date: 31/07/2019
*/


//Importação dos modulos necessários à API
const app = require('express')()
const consign = require('consign')


//Configuração da conexão com o banco de dados 
require('./config/db/db')()


//Configuração dos outros arquivos da API (Middlewares, Rotas e Controllers)
consign()
    .include('./config/middlewares/middlewares.js')
    .then('./controller')
    .then('./config/routes/routes.js')
    .into(app)


//Sobe o servidor na porta especificada 
let porta = 3000
app.listen(porta, () => {
    console.log("Eng API: Fazendas e Lotes\nOuvindo na porta: " + porta)
})







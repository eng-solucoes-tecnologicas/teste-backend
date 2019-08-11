module.exports = () => {
    const env = require('./../../.env')
    const mongoose = require("mongoose")
    const uri = env.url

    mongoose.connect(uri, { useNewUrlParser: true }, err => {
        if (err) {
            const msg = "ERRO! Não foi possível conectar ao MongoDB"

            //Deixa o console com fundo vermelho e letra branca pra destacar
            console.log('\x1b[41m%s\x1b[31m', msg, '\x1b[0m')
            console.log(err.stack)
            client.close()
        }

    });
}
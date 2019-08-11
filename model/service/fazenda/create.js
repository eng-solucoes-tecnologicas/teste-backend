const Fazenda = require('../../entity/Fazenda.entity')

const create = async (nome, endereco) => {
    let resultado = null
    await Fazenda.collection.insertOne({
        _nome: nome,
        _endereco: endereco,
        _lotes: [],
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
    }).then(success => {
        resultado = success.ops[0]
    }).catch(err => resultado = err)
    return resultado

}

module.exports = create
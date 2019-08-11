const Lote = require('../../entity/Lote.entity')
const Fazenda = require('../../entity/Fazenda.entity')

const mongoose = require('mongoose')
const create = async (nome, endereco, fazendaId) => {
    fazendaId = mongoose.Types.ObjectId(fazendaId)
    let resultado = null
    await Lote.collection.insertOne({
        _nome: nome,
        _endereco: endereco,
        _fazenda: fazendaId,
        _quantAnimais: 0,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
    }).then(success => {
        resultado = success.ops[0]
    }).catch(err => resultado = err)

    //Adiciona o lote à fazenda
    await Fazenda.findById(fazendaId).then(fazenda => {
        fazenda._lotes.push(resultado._id)
        fazenda.save(fazenda)
    }).catch(err => resultado = err)


    return resultado
}

module.exports = create
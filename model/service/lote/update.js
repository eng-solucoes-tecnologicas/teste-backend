const Lote = require('../../entity/Lote.entity')
const mongoose = require('mongoose')

const update = async (id, nome, endereco, fazendaId, quantAnimais) => {
    id = mongoose.Types.ObjectId(id)
    fazendaId = mongoose.Types.ObjectId(id)
    let resultado = null
    resultado = await Lote.updateOne({ "_id": id }, {
        $set: {
            "_nome": nome,
            "_endereco": endereco,
            "_fazenda": fazendaId,
            "_quantAnimais": quantAnimais
        }
    }, { upsert: true })
        .catch(err => resultado = err)
    return resultado
}

module.exports = update
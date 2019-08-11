const Fazenda = require('../../entity/Fazenda.entity')
const mongoose = require('mongoose')

const update = async (id, nome, endereco) => {
    id = mongoose.Types.ObjectId(id)
    let resultado = null
    resultado = await Fazenda.updateOne({ "_id": id }, {
        $set: {
            "_nome": nome,
            "_endereco": endereco,
        }
    }, { upsert: true })
        .catch(err => resultado = err)

    return resultado
}

module.exports = update
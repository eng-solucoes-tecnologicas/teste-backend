const Fazenda = require('../../entity/Fazenda.entity')
const mongoose = require('mongoose')

const softDelete = async (id) => {
    id = mongoose.Types.ObjectId(id)
    let resultado = null
    resultado = await Fazenda.delete({ "_id": id })
    return resultado
}

module.exports = softDelete
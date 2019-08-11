const Lote = require('../../entity/Lote.entity')
const mongoose = require('mongoose')

const softDelete = async (id) => {
    id = mongoose.Types.ObjectId(id)
    let resultado = null
    resultado = await Lote.delete({ '_id': id })
    return resultado
}

module.exports = softDelete
const mongoose = require('mongoose')
const mongoDelete = require('mongoose-delete')

const LoteSchema = new mongoose.Schema({
        _id: mongoose.SchemaTypes.ObjectId,
        _nome: { type: String, required: true },
        _endereco: { type: String, required: true },
        _fazenda: mongoose.SchemaTypes.ObjectId,
        _quantAnimais: Number
}, { timestamps: true })

LoteSchema.plugin(mongoDelete)

const Lote = mongoose.model('Lote', LoteSchema)
module.exports = Lote


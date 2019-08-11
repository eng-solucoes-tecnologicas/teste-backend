const mongoose = require('mongoose')
const mongoDelete = require('mongoose-delete')

const FazendaSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    _nome: { type: String, required: true },
    _endereco: { type: String, required: true },
    _lotes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Lote'
    }]
}, { timestamps: true, autoindex: true })

FazendaSchema.plugin(mongoDelete)

const Fazenda = mongoose.model('Fazenda', FazendaSchema)

module.exports = Fazenda
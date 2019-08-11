const Fazenda = require('../../entity/Fazenda.entity')
const DTO = require('../../dto/FazendaDto')

const readAll = async () => {
    let resultado = null
    await Fazenda.find()
        .populate('_lotes')
        .then(docs => {
            resultado = DTO.toFazendas(docs.filter(doc => !doc.deleted))
        }).catch(err => resultado = err)
    return resultado
}
const readAllPaginated = async (pagina, maxItems) => {
    let resultado = null
    await Fazenda.find()
        .skip(Number.parseInt(pagina))
        .limit(Number.parseInt(maxItems))
        .populate('_lotes')
        .then(docs => {
            resultado = DTO.toFazendas(docs.filter(doc => !doc.deleted))
        }).catch(err => resultado = err)
    DTO.toFazendas(resultado)
    return resultado

}
const readByName = async (nome) => {
    let resultado = null
    await Fazenda.findOne({ "_nome": nome })
        .populate('_lotes')
        .then(doc => {
            if (doc.deleted) {
                resultado = ""
            } else resultado = doc
        }).catch(err => resultado = err)
    return DTO.toFazenda(resultado)
}

module.exports = { readAll, readByName, readAllPaginated }
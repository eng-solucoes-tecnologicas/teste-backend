const Lote = require('../../entity/Lote.entity')
const DTO = require('../../dto/LoteDto')

const readAll = async () => {
    let resultado = null
    await Lote.find()
        .then(docs => resultado = DTO.toLotes(docs.filter(doc => !doc.deleted)))
        .catch(err => resultado = err)
    return resultado
}

const readAllPaginated = async (pagina, maxItems) => {
    let resultado = null
    await Lote.find()
        .skip(Number.parseInt(pagina))
        .limit(Number.parseInt(maxItems))
        .then(docs => reusltado = DTO.toLotes(docs.filter(doc => !doc.deleted)))
        .catch(err => resultado = err)
    DTO.toLotes(resultado)
    return resultado

}

const readByName = async (nome) => {
    let resultado = null
    await Lote.findOne({ "_nome": nome })
        .then(doc => {
            if (doc.deleted)
                resultado = ""
            else resultado = doc
        })
        .catch(err => resultado = err)
    return DTO.toLote(resultado)

}

module.exports = { readAll, readByName, readAllPaginated }
const toLotes = require('./LoteDto').toLotes

module.exports = class DTO {
    static toFazendas(fazendas) {
        return fazendas.map(farm => {
            return {
                _id: farm._id,
                _nome: farm._nome,
                _endereco: farm._endereco,
                _lotes: toLotes(farm._lotes),
                _createdAt: farm.createdAt,
                _updatedAt: farm.updatedAt
            }
        })

    }
    static toFazenda(fazenda) {
        return {
            _id: fazenda._id,
            _nome: fazenda._nome,
            _endereco: fazenda._endereco,
            _lotes: toLotes(fazenda._lotes),
            _createdAt: fazenda.createdAt,
            _updatedAt: fazenda.updatedAt
        }
    }

}

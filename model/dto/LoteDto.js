module.exports = class DTO {
    static toLotes(lotes) {
        return lotes.map(lote => {
            return {
                _nome: lote._nome,
                _fazenda: lote._fazenda,
                _quantAnimais: lote._quantAnimais,
                _createdAt: lote.createdAt,
                _updatedAt: lote.updatedAt

            }
        })
    }

    static toLote(lote) {
        return {
            _nome: lote._nome,
            _fazenda: lote._fazenda,
            _quantAnimais: lote._quantAnimais,
            _createdAt: lote.createdAt,
            _updatedAt: lote.updatedAt

        }
    }
}


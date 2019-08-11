const { loteCRUD } = require('../model/service')

const get = async (req, res) => {
    if (req.query.nome) {
        if (req.query.nome !== '') {
            let resultado = await loteCRUD.readByName(req.query.nome)
            if (resultado !== null) {
                res.status(200)
                res.json(resultado)
                res.end()
            } else {
                res.status(400)
                res.json('Nenhum lote encontrado com este nome.')
                res.end()
            }
        } else {
            res.status(400)
            res.json('Nome não deve estar em branco')
            res.end()
        }
    } else if (req.query.page && req.query.max) {
        let resultado = await loteCRUD.readAllPaginated(req.query.page, req.query.max)
        if (resultado !== []) {
            res.status(200)
            res.json(resultado)
            res.end()
        } else {
            res.status(400)
            res.json('Nenhum Lote encontrado')
            res.end()
        }
    } else {
        let resultado = await loteCRUD.readAll()
        if (resultado !== []) {
            res.status(200)
            res.json(resultado)
            res.end()
        } else {
            res.status(400)
            res.json('Nenhum Lote enccontrado.')
            res.end()
        }
    }

}

const post = async (req, res) => {
    if (req.body) {
        if (req.body.nome && req.body.endereco && req.body.fazenda) {
            let resultado = await loteCRUD.create(req.body.nome, req.body.endereco,
                req.body.fazenda)
            if (resultado == null) {
                res.status(500)
                res.json(resultado)
                res.end()
            }
            else {
                res.status(200)
                res.json(resultado)
                res.end()
            }
        }
    } else {
        res.status(400)
        res.json("Nome, endereço e Id da fazenda não devem estar em branco")
        res.end()
    }
}

const put = async (req, res) => {
    if (req.body) {
        if (req.body._id) {
            let resultado = await loteCRUD
                .update(req.body._id,
                    req.body._nome,
                    req.body._endereco,
                    req.body._fazendaId,
                    req.body._quantAnimais)
            res.status(200)
            res.json(resultado)
            res.end()

        } else {
            res.status(400)
            res.json("Id não deve estar em branco.")
            res.end()
        }
    } else {
        res.status(400)
        res.json("Nada foi informado")
        res.end()
    }
}

const softDelete = async (req, res) => {
    if (req.body) {
        if (req.body._id) {
            msg = await loteCRUD.softDelete(req.body._id)
            res.status(200)
            res.json(msg)
            res.end()

        } else {
            res.status(400)
            res.json("Id não deve estar em branco.")
            res.end()
        }
    } else {
        res.status(400)
        res.json("Nada foi informado")
        res.end()
    }
}

module.exports = app => { return { get, post, put, softDelete } }

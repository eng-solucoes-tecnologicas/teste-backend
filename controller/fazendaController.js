const { fazendaCRUD } = require('../model/service')

const get = async (req, res) => {
    if (req.query.nome) {
        if (req.query.nome !== '') {
            let resultado = await fazendaCRUD.readByName(req.query.nome)
            if (resultado !== null) {
                res.status(200)
                res.json(resultado)
                res.end()
            } else {
                res.status(400)
                res.json("Nenhuma fazenda encontrada com este nome.")
                res.end()
            }
        } else {
            res.status(400)
            res.json("Nome não deve estar vazio.")
            res.end()
        }
    } else if (req.query.page && req.query.max) {
        let resultado = await fazendaCRUD.readAllPaginated(req.query.page, req.query.max)
        if (resultado !== []) {
            res.status(200)
            res.json(resultado)
            res.end()
        } else {
            res.status(400)
            res.json('Nenhuma fazenda encontrado.')
            res.end()
        }
    } else {
        let resultado = await fazendaCRUD.readAll()
        if (resultado === []) {
            res.status(400)
            res.json("Nenhuma fazenda encontrada")
            res.end()
        }
        res.status(200)
        res.json(resultado)
        res.end()
    }
}

const post = async (req, res) => {
    if (req.body) {
        if (req.body.nome && req.body.endereco) {
            let resultado = await fazendaCRUD.create(req.body.nome, req.body.endereco)
            if (resultado !== null) {
                res.status(200)
                res.json(resultado)
                res.end()
            } else {
                res.status(500)
                res.json(resultado)
                res.end()
            }
        }
    } else {
        res.status(400)
        res.json("Nome e endereço não devem estar em branco")
        res.end()
    }
}

const put = async (req, res) => {
    if (req.body) {
        if (req.body._id) {
            let resultado = await fazendaCRUD.update(req.body._id, req.body._nome, req.body._endereco)
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
            msg = await fazendaCRUD.softDelete(req.body._id)
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



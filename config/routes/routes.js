module.exports = app => {

    const fazendaController = app.controller.fazendaController
    const loteController = app.controller.loteController

    app.route('/fazendas')
        .get(fazendaController.get)
        .post(fazendaController.post)
        .put(fazendaController.put)
        .delete(fazendaController.softDelete)

    app.route('/lotes')
        .get(loteController.get)
        .post(loteController.post)
        .put(loteController.put)
        .delete(loteController.softDelete)

    app.route('/')
        .all((req, res) => res.send("It Works!"))

}
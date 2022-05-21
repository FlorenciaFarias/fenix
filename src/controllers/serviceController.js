const serviceController = {
    agenda: (req,res) => {
        res.render('servicios/agenda');
    },
    catalogo: (req,res) => {
        res.render('servicios/catalogo');
    }
}

module.exports = serviceController;
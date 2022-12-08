const serviceController = {
    agenda: (req,res) => {
        res.render('servicios/agenda',{
            titulo: 'Agendar turno'
            
        });
    },
    catalogo: (req,res) => {
        res.render('servicios/catalogo',{
            titulo: 'Catálogo con precios'
        });
    }
}

module.exports = serviceController;
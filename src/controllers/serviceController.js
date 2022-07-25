const serviceController = {
    agenda: (req,res) => {
        res.render('servicios/agenda',{
            titulo: 'Agendar turno',
            estilos: ['agenda', 'header', 'footer']
        });
    },
    catalogo: (req,res) => {
        res.render('servicios/catalogo',{
            titulo: 'Catálogo con precios',
            estilos: ['catalogo', 'header', 'footer']
        });
    }
}

module.exports = serviceController;
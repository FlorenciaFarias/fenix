const mainController = {
    index: (req,res) => {
        res.render('main/index',{
            titulo: 'Fenix Barber',
            estilos: ['index', 'index-media', 'header', 'footer']
        });
    }
}

module.exports = mainController;
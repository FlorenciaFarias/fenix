const mainController = {
    index: (req,res) => {
        res.render('main/index',{
            titulo: 'Fenix Barber'
        });
    }
}

module.exports = mainController;
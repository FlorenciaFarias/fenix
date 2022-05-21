const userController = {
    login: (req,res) => {
        res.render('usuarios/login');
    },
    register: (req,res) => {
        res.render('usuarios/register');
    }
}

module.exports = userController;
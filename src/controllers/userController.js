const userController = {
    login: (req,res) => {
        res.render('usuarios/login',{
            titulo: 'Iniciar sesión'
        });
    },
    register: (req,res) => {
        res.render('usuarios/register',{
            titulo: 'Registrarme'
        });
    }
}

module.exports = userController;
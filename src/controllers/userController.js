const userController = {
    login: (req,res) => {
        res.render('usuarios/login',{
            titulo: 'Iniciar sesión',
            estilos: ['login', 'header', 'footer']
        });
    },
    register: (req,res) => {
        res.render('usuarios/register',{
            titulo: 'Registrarme',
            estilos: ['register', 'header', 'footer']
        });
    }
}

module.exports = userController;
const { validationResult } = require('express-validator');
const { all, create, write } = require('../models/usuario');


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
    },
    dataRegister: (req, res) => {

        let validaciones = validationResult(req);
        let { errors } = validaciones;
        if(errors && errors.length > 0){
            return res.render('usuarios/register',{
                titulo: 'Registrarme',
                oldData: req.body,
                errors: validaciones.mapped()
            });
        };

        req.body.avatar = req.files[0].filename;
        let nuevoUsuario = create(req.body);
        let usuarios = all();
        usuarios.push(nuevoUsuario);
        write(usuarios);

        console.log(usuarios);
        return res.redirect('/usuarios/login');
    }
}

module.exports = userController;
const { body } = require('express-validator');
const { unlinkSync } = require('fs');
const { extname, resolve } = require('path');

const { all } = require('../models/usuario');

const register = [

    body('nombre')
        .notEmpty()
        .withMessage('El nombre debe completarse').bail().isLength({min: 2})
        .withMessage('El nombre debe contener mínimo 2 caracteres')
        .bail(),
    body('apellido')
        .notEmpty()
        .withMessage('El apellido debe completarse')
        .bail().isLength({min: 2})
        .withMessage('El apellido debe contener mínimo 2 caracteres')
        .bail(),
    body('email')
        .notEmpty()
        .withMessage('El E-mail debe completarse')
        .bail()
        .isEmail()
        .withMessage('Formato de E-mail inválido')
        .bail()
        .custom( ( value ) => {
            let usuarios = all();
            usuarios = usuarios.map( usuario  => usuario.email);
                if(usuarios.includes(value)){
                    throw new Error('Ya existe un usuario registrado con este email, intente con otro');
                }
        }),
    body('tel')
        .optional()
        .bail()
        .isMobilePhone('es-AR').withMessage('Número telefónico incorrecto')
        .bail(),
    body('dni')
        .notEmpty()
        .withMessage('El DNI no puede quedar vacío')
        .bail()
        .isNumeric()
        .withMessage('Solo se admiten números')
        .bail(),
    body('calle')
        .notEmpty()
        .withMessage('La calle no puede quedar vacía')
        .bail(),
    body('altura')
        .notEmpty()
        .withMessage('La altura no puede quedar vacía')
        .bail()
        .isNumeric()
        .withMessage('Solo se admiten números')
        .bail(),
    body('localidad')
        .notEmpty()
        .withMessage('La localidad debe completarse')
        .bail(),
    body('provincia')
        .notEmpty()
        .withMessage('Seleccione una provincia')
        .bail(),
    body('cp')
        .notEmpty()
        .withMessage('Debe colocar su número de Código Postal')
        .bail()
        .isNumeric()
        .withMessage('Solo se admiten números')
        .bail(),
    body('password')
        .notEmpty()
        .withMessage('Debe escribir una contraseña')
        .bail()
        .isLength({ min: 8 })
        .withMessage('La contraseña debe contener mínimo 8 caracteres')
        .bail()
        .isStrongPassword({
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false,
        })
        .withMessage(
        'La contraseña debe contener al menos UNA letra mayuscula, UNA letra minuscula, UN número y UN caracter especial')
        .bail(),
    body('repetir_password')
        .notEmpty()
        .withMessage('Debe escribir una contraseña')
        .bail()
        .isLength({ min: 8 })
        .withMessage('La contraseña debe contener mínimo 8 caracteres')
        .bail()
        .custom(( value, { req } ) => {
            if (value !== req.body.password) {
                throw new Error('Las contraseñas deben coincidir');
            }
            return true;
        }).bail(),
    body('fecha')
        .notEmpty()
        .withMessage('Debe seleccionar su fecha de nacimiento')
        .bail()
        .isDate()
        .withMessage('Ingrese una fecha válida')
        .bail(),
    body('avatar')
        .custom( ( value, { req } ) => {
            if(req.files && req.files[0]){
                let archivo = req.files;
                let extensionesValidas = ['.png', '.jpg', '.jpeg', '.svg', '.PNG', '.JPG', '.JPEG', '.SVG'];
                let foto = archivo[0];
                let extension = extname(foto.filename);

                if(!extensionesValidas.includes(extension)){
                    unlinkSync( resolve(__dirname, '../uploads', 'usuarios', foto.filename));

                    throw new Error('Solo se admiten imagenes: png, jpg, jpeg y svg');
                };
            }
        })
]

module.exports = register;
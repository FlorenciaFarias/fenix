const { body } = require('express-validator');
//const { all } = require('../models/usuarios');

const register = [

    body('nombre').notEmpty().withMessage('El nombre debe completarse').bail().isLength({min: 2}).withMessage('El nombre debe contener mínimo 2 caracteres').bail()
]

module.exports = register;
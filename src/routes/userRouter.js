const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = require('../middlewares/multer');
const upload = multer({storage: storage('../uploads/usuarios')});
const registerMidd = require('../middlewares/validaciones');
const validacionRegister = require('../validations/validacionRegistro');
const validacionLogin = require('../validations/validacionLogin');
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);

router.post('/register', [upload.any(), validacionRegister], userController.dataRegister);
router.post('/loginProcess', [validacionLogin], userController.loginProcess)
module.exports = router;
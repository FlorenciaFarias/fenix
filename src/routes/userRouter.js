const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = require('../middlewares/multer');
const upload = multer({storage: storage('../uploads/usuarios')});

const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/register', upload.any(), userController.dataRegister);

module.exports = router;
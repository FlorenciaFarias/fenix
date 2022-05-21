const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/serviceController');

router.get('/agenda', serviceController.agenda);
router.get('/catalogo', serviceController.catalogo);

module.exports = router;

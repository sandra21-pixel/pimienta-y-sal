var express = require('express');
var router = express.Router();
const {index}= require('../controllers/menuControllers')

router.get('/', index);

module.exports = router;

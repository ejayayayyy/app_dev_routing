const express = require('express');
const router = express.Router();
const modules = require('../controller/User_Controller');

router.get('/', modules.index);
router.get('/second', modules.second);
router.get('/third', modules.third);
router.get('/fourth', modules.fourth);
router.get('/fifth', modules.fifth);

module.exports = router;
const express = require('express');
const router = express.Router();
const mailController = require('../controller/mailController');

router.post('/subscribe', mailController.subscribeUser);

module.exports = router;
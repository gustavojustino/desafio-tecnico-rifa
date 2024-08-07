const express = require('express');
const router = express.Router();
const raffleController = require('../controllers/raffleController');


// Requisição HTTP
router.post('/buy', raffleController.buyRaffle);
router.get('/draw', raffleController.drawRaffle);

module.exports = router;
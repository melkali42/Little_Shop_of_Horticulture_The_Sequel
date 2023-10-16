const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/paymentProcessor');

router.post('/process-payment', paymentController.processPayment);

module.exports = router;
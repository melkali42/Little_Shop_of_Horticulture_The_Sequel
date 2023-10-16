const express = require('express');
const router = express.Router();

const paymentProcessor = require('../controllers/paymentProcessor');
const logger = require('../utils/logger');

router.post('/process-payment', async (req, res) => {
    try {

        const { amount, currency, cardToken } = req.body;

        const paymentResult = await paymentProcessor.processPayment(amount, currency, cardToken);

        if (paymentResult.success) {

        res.status(200).json({ success: true, message: 'Payment successful' });
    } else {
        res.status(400).json({ success: false, message: paymentResult.error });
    }

    } catch (error) {

        logger.error('An unexpected error occurred during payment processing:', error);

        res.status(500).json({ success: false, message: 'Payment processing failed' });
    }
});

module.exports = router;

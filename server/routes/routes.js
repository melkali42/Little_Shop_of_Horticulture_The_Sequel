const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentProcessor');

router.get('/api/products', async (req, res) => {
    try {
    const products = await Product.find();
    res.json(products);
    } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/process-payment', paymentController.processPayment);

module.exports = router;

const paymentGateway = require('payment-gateway-library');
const db = require('./your-database-module');
const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, checkout } = require('../controllers/cartController');

router.post('/add-to-cart', addToCart);
router.delete('/remove-from-cart/:productId', removeFromCart);

router.post('/checkout', async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ error: 'User is not authenticated.' });
    }

    try {
        const paymentResult = await paymentGateway.charge(req.user, cart);

        if (paymentResult.success) {
            const order = {
                userId: req.user.id,
                products: cart,
                totalAmount: calculateTotalPrice(cart),
            };

            const newOrder = await db.createOrder(order);

            cart = [];

            return res.status(200).json({ message: 'Checkout completed successfully.', order: newOrder });
        } else {
            return res.status(400).json({ error: 'Payment failed.' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error while processing payment.' });
    }
});

module.exports = router;

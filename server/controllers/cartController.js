const db = require('../path-to-db-module');
const cart = [];

exports.addToCart = (req, res) => {
    const { productDetails } = req.body;

    const existingProductIndex = cart.findIndex((product) => product.id === productDetails.id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push({ ...productDetails, quantity: 1 });
    }

    res.json({ success: true, cart });
};

exports.removeFromCart = (req, res) => {
    const { productId } = req.params;

    const productIndex = cart.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        res.json({ success: true, cart });
    } else {
        res.status(404).json({ success: false, message: 'Product not found in cart.' });
    }
};

exports.checkout = (req, res) => {
    db.createOrder(cart)
    .then(() => {
        cart.length = 0;
        res.json({ success: true, message: 'Order placed successfully.' });
    })
    .catch((error) => {
        res.status(500).json({ success: false, message: 'Error processing the order.' });
    });
};

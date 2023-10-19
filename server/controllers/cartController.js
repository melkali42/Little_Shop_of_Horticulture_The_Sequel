const db = require('../path-to-db-module');
const Product = require('../path-to-product-model');
const User = require('../path-to-user-model');

exports.addToCart = async (req, res) => {
    const { productDetails } = req.body;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const product = await Product.findById(productDetails.id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found.' });
        }

        const existingCartItem = user.cart.find((item) => item.product.toString() === product._id.toString());

        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            user.cart.push({ product: product._id, quantity: 1 });
        }

        await user.save();

        res.json({ success: true, cart: user.cart });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error adding to cart.' });
    }
};

exports.removeFromCart = async (req, res) => {
    const { productId } = req.params;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const productIndex = user.cart.findIndex((item) => item.product.toString() === productId);

        if (productIndex === -1) {
            return res.status(404).json({ success: false, message: 'Product not found in cart.' });
        }

        user.cart.splice(productIndex, 1);
        await user.save();

        res.json({ success: true, cart: user.cart });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error removing from cart.' });
    }
};

exports.checkout = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId).populate('cart.product');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        if (user.cart.length === 0) {
            return res.status(400).json({ success: false, message: 'Cart is empty. Add products before checking out.' });
        }

        const orderProducts = user.cart.map((item) => ({
            product: item.product._id,
            quantity: item.quantity,
        }));

        const newOrder = await db.createOrder({
            userId,
            products: orderProducts,
        });

        user.cart = [];
        await user.save();

        res.json({ success: true, message: 'Order placed successfully.', order: newOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error processing the order.' });
    }
};

// Need to require the Product model to find all products and send to React for rendering
const express = require('express');
const router = express.Router();
const Product = require('../models/temp/Product');

// Define the route to get all products
router.get('/products', async (req, res) => {
    try {
        // Find all products in the database
        const products = await Product.find();
        
       // Extract the image_url and description fields from each product
        const productData = products.map(product => ({
            name: product.name,
            image_url: product.image_url,
            description: product.description,
            price: product.price,
            difficulty: product.difficulty,
        }));

        // Send the product data to the client
        res.status(200).json(productData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Export the router
module.exports = router;
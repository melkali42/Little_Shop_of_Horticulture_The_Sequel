const { Schema, model } = require('mongoose');
const CareTip = require('./CareTip');

// instead of having a separate care tips model, we can just add care tips to the products model? 
// might need to revise models
// revised to match seed file
const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    difficulty_level: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    image_url: {
        type: String,
    },
    careTips: [CareTip.schema],
});

const Product = model('Product', productSchema);

module.exports = Product;
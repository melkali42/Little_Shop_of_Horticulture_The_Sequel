const { Schema, model } = require('mongoose');

// create products schema, added purchaser array to keep track of who has purchased the product and careTips array to keep track of care tips for the product
const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    purchaser: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    careTips: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PlantCareTips'
        },
    ],
});

const Product = model('Product', productSchema);

module.exports = Product;
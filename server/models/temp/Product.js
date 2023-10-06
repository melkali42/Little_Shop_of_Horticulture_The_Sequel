const { Schema, model } = require('mongoose');

// create products schema, probably should create helper function for timestamp
const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    careTips: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PlantCareTips'
        },
    ],
});

const Product = model('Product', productSchema);

module.exports = Product;
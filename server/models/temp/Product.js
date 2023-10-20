const { Schema, model } = require('mongoose');
const CareTip = require('./CareTip');
const db = require('../../config/connection');

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

db.once('open', async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(
            [
                {
                    "name": "Snake Plant",
                    "description": "A sturdy, upright plant with long, sword-like leaves that come in various patterns and colors.",
                    "difficulty_level": "easy",
                    "price": 14.99,
                    "image_url": "https://www.gardendesign.com/pictures/images/900x705Max/site_3/snsevieria-trifasciata-laurentii-houseplant-green-leaves-shutterstock-com_14449.jpg"
                },
                {
                    "name": "Spider Plant",
                    "description": "An air-purifying plant with arching, green and white striped leaves that produce baby plantlets.",
                    "difficulty_level": "easy",
                    "price": 23.99,
                    "image_url": "https://www.fast-growing-trees.com/cdn/shop/products/Spider_Plant_2.jpg?v=1638987050&width=1000"
                },
                {
                    "name": "Pothos",
                    "description": "A trailing plant with heart-shaped leaves that come in green, variegated, or golden colors.",
                    "difficulty_level": "easy",
                    "price": 12.99,
                    "image_url": "https://heyrooted.com/cdn/shop/products/8POTHOS_NEON-1_98d41b00-201c-4d87-92a6-82afafd231dd.png?v=1677282895"
                },
                {
                    "name": "ZZ Plant",
                    "description": "A low-maintenance plant with glossy, dark green leaves that can tolerate neglect.",
                    "difficulty_level": "easy",
                    "price": 20.99,
                    "image_url": "https://edsplantshop.com/cdn/shop/products/zamioculcas-zamiifolia-zz-plant-482544.jpg?v=1691421590"
                },
            ]
        )
    } catch(err) {
        console.error(err);
    }
})


module.exports = Product;
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
                {
                    "name": "Maidenhair Fern",
                    "description": "A delicate fern with fan-shaped fronds and a soft, airy appearance.",
                    "difficulty_level": "difficult",
                    "price": 32.99,
                    "image_url": "https://m.media-amazon.com/images/I/71du5QOSj+L._AC_UF894,1000_QL80_.jpg"
                },
                {
                    "name": "Begonia Rex",
                    "description": "A stunning foliage plant with colorful, textured leaves in various patterns.",
                    "difficulty_level": "difficult",
                    "price": 34.99,
                    "image_url": "https://www.whiteflowerfarm.com/mas_assets/cache/image/9/0/7/3/36979.Jpg"
                },
                {
                    "name": "String of Hearts",
                    "description": "A trailing succulent with heart-shaped leaves that's visually appealing but requires specific care.",
                    "difficulty_level": "moderate",
                    "price": 33.99,
                    "image_url": "https://www.myhomenature.com/media/catalog/product/cache/6bd3477fa2f2a68d55e0c78c947906e5/v/a/variegated_chain_of_hearts_ceropegia_woodii_varieg_.jpg"
                },
                {
                    "name": "Ficus Bonsai",
                    "description": "A bonsai version of the Ficus plant, requiring careful pruning and maintenance.",
                    "difficulty_level": "difficult",
                    "price": 349.99,
                    "image_url": "https://www.bonsaiboy.com/catalog/media/k3461.jpg"
                }
            ]
        )
    } catch(err) {
        console.error(err);
    }
})


module.exports = Product;
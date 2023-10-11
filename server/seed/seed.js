const db = require('../config/connection');
const { User, Product, CareTip } = require('../models/temp');
const userSeed = require('./userSeed.json');
const productSeed = require('./productSeed.json');
const careTipSeed = require('./careTipSeed.json');

db.once('open', async () => {
    try {
      await User.deleteMany({});
      await Product.deleteMany({});
      await CareTip.deleteMany({});

      await User.create(userSeed)
      /*
      // loop through productSeed and create a new product for each
      for (var i = 0; i < productSeed.length; i++) {
        const { _id, purchaser } = await Product.create(productSeed[i]);
        // find the user with the matching _id and add the product to the user's products array
        await User.findOneandUpdate(
              { _id: purchaser },
              { $addToSet: { products: _id } }
        ) 
      }

      // add care tips to products
      // find careTip id and author and associate with product
      const products = await Product.insertMany(productSeed);
      for (var i = 0; i < careTipSeed.length; i++) {
          const { _id, tipAuthor } = await CareTip.create(careTipSeed[i]);
          await Product.findOneAndUpdate(
              { purchaser: tipAuthor },
              ( { $addToSet: { careTips: _id}})
          ) 
      } */
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
    

    console.log('all done!');
    process.exit(0);
})

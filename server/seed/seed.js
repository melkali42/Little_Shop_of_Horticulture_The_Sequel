const db = require('../config/connection');
const { User, Product, CareTip } = require('../models/temp');
const userSeed = require('./userSeed.json');
const productSeed = require('./productSeed.json');
const careTipSeed = require('./careTipSeed.json');

// this seed file can be clarified, the for loop is confusing
// added Order model to seed file
db.once('open', async () => {
    try {
      await User.deleteMany({});
      await Product.deleteMany({});
      await CareTip.deleteMany({});
      // await Order.deleteMany({});

      await User.create(userSeed);
      console.log('users seeded');

      await Product.create(productSeed);
      console.log('products seeded');

      await CareTip.create(careTipSeed);
      console.log('care tips seeded');
      
      // instead of adding separate Order model, add order history to User model
      await User.create({
        firstName: "Wink",
        lastName: "Winkerson",
        email: "w.winkerson@email.com",
        password: "b@ckground",
        order: [productSeed[0]],
        location: "New York, NY"
      })
      /* await Order.insertMany({
        products: [
            productSeed[0],
            productSeed[1],
            productSeed[2],
            productSeed[3],
            ]
        }); */
      console.log('order seeded');
      
      /*
      // loop through productSeed and create a new product for each
      for (var i = 0; i < productSeed.length; i++) {
        const { _id, purchaser } = await Product.create(productSeed[i]);
        // find the user with the matching _id and add the product to the user's products array
        await User.findOneAndUpdate(
              { email: purchaser },
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

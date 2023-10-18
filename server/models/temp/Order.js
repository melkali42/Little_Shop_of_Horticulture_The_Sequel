const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    userId: String,
    totalAmount: Number
});

const Order = model('Order', orderSchema);

Order.createOrder = function (orderData) {
    return this.create(orderData);
};

module.exports = Order;

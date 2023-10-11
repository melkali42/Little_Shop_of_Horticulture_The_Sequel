const { Schema, model } = require('mongoose');

// schema for care tips, create helper function for timestamp
// maybe this can be comments instead?
const careTipSchema = new Schema({
    tip: {
        type: String,
        minlength: 1,
        maxlength: 280,
    },
    // maybe this should be a reference to the user who posted the tip?
    tipAuthor: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }, 
});

const CareTip = model('CareTip', careTipSchema);

module.exports = CareTip;

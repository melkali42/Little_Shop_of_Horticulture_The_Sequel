const { Schema, model } =  require('mongoose');
const bcrypt = require('bcrypt');

// Create schema for users with Products model referenced, should add bcrypt to passwords
// find a way to not transmit hashed password?
// add virtuals to get full name and to get all products and care tips for a user
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please provide a valid email address.']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
    ],
    careTips: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CareTip'
        },
    ],
    location: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    cart: {
        type: Array,
        default: []
    },

}, { toJSON: { virtuals: true}});

// virtual to get full name
userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
}).set(function (v) {
    const firstName = v.split(' ')[0];
    const lastName = v.split(' ')[1];
    this.set({ firstName, lastName });
})

// function that should run before db is saved
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// bcrypt compare
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
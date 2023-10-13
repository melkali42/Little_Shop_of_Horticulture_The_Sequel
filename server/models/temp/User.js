const { Schema, model } =  require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order')

// find a way to not transmit hashed password?
// add virtuals to get full name and to get all products and care tips for a user
// might need to revise to add order history
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
    // this should show all products purchased by the user (order history)
    order: [Order.schema],
    location: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    }, 
    { 
        toJSON: { 
            virtuals: true
        }, 
        id: false 
});

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

// virtual to get full name
userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
}).set(function (v) {
    const { firstName, lastName } = v.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
})

const User = model('User', userSchema);

module.exports = User;
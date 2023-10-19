const { AuthenticationError } = require('apollo-server-express');
const { User, Product, CareTip, Order } = require("../models/temp")
const { signToken } = require("../utils/auth")


const resolvers = {
    Query: {
        /* user: async(_, __, context) => {
            if(context.user){
                const userData = await User.findOne({_id: context.user._id}).select("-__v -password")
                return userData
            }
            throw AuthenticationError
        
        }, */
        
        // find all users
        users: async() => {
            return User.find()
        },
        // placeholder for finding single user by id, need to work on adding authentication
        user: async(_, { userId }) => {
            return User.findOne({ _id: userId })
        } 

    },
    Mutation: {
        signUp: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create(
                {
                    firstName,
                    lastName,
                    email,
                    password
                }
            )
            const token = signToken(user)
            return {token, user}
            // return user;
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email})
            if(!user){
                throw AuthenticationError
            }
            const checkPassword = await user.isCorrectPassword(password)
            if(!checkPassword){
                throw AuthenticationError
            }
            const token = signToken(user)
            return {token, user}
        }
    }

}

module.exports = resolvers
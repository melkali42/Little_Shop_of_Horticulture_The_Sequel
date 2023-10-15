const { AuthenticationError } = require('apollo-server-express');
const { User, Product, CareTip, Order } = require("../models/temp")
const { signToken } = require("../utils/auth")


const resolvers = {
    Query: {
        user: async(_, __, context) => {
            if(context.user){
                const userData = await User.findOne({_id: context.user._id}).select("-__v -password")
                return userData
            }
            throw AuthenticationError
        
        }
        /*
        // find all users
        user: async() => {
            return User.find()
        } */

    },
    Mutation: {
        signUp: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return {token, user}
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
const { AuthenticationError } = require('apollo-server-express');
const User = require("../models/temp/User")
const { signToken } = require("../utils/auth")


const resolvers = {
    Query: {
        user: async(context) => {
            if(context.user){
                const userData = await User.findOne({_id: context.user._id}).select("-__v -password")
                return userData
            }
            throw AuthenticationError
        
        }

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
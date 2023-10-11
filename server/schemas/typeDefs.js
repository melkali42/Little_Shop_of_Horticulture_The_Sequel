const typeDefs = `
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    location: String
    createdAt: Date
    products: [Product]
    careTips: [Tips]
}
type Tips {
    tip: String
    tipAuthor: String
    createdAt: Date
}
type Product {
    name: String
    purchaser: [User]
    careTips: [Tips]
}
type Auth {
    token: ID!
    user: User
}
type Query {
    user: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    signUp(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    
}

`;
module.exports = typeDefs
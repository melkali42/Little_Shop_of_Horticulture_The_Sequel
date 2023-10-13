const typeDefs = `
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    order: [Order]
    location: String
    createdAt: Date
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
type Order {
    purchaseDate: Date
    products: [Product]
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
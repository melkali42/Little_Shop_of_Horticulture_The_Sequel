const typeDefs = `
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    order: [Order]
    location: String
    
}
type Tips {
    tip: String
    tipAuthor: String
    
}
type Product {
    name: String
    purchaser: [User]
    careTips: [Tips]
}
type Order {
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
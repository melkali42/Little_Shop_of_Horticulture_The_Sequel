
const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    location: String
    createdAt: String
    products: [Product]
    careTips: [CareTip]
    
}

type Tips {
    tip: String
    tipAuthor: String
    createdAt: String
}

type Product {
    name: String
    purchaser: String
    careTips: [CareTip]
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
    signup(firstName: String!, lastName: String!, email: String!, password: String!): Auth

}

`;

module.exports = typeDefs

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
## added _id ##
type Product {
    _id: ID
    name: String
    purchaser: [User]
    careTips: [Tips]
}
type Order {
    products: [Product]
}
type Auth {
    token: String
    user: User
}
## added [] to User query to query multiple users ##
type Query {
    user(userId: ID!): User
    users: [User]
}
type Mutation {
    login(email: String!, password: String!): Auth
    signUp(firstName: String!, lastName: String!, email: String!, password: String!): User
    
}

`;
module.exports = typeDefs


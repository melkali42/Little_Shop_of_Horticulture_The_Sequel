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

module.exports = typeDefs;
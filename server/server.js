const express = require('express');
// require('dotenv').config();
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
// const { graphqlHTTP } = require('express-graphql');
// const schema = require('./schema/schema');
// constconnectDB = require('./config/db');
// Import the two parts of a GraphQL schema
const { typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');
// const connectDB = require('./config/db');
// const auth = require('./utils/auth');
const { authMiddleware } = require('./utils/auth');


const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    });

const app = express();

//Connect to database
// connectDB();

/*app.use('graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
})); */
    

// Add middleware to integrate Apollo server with Express
// server.applyMiddleware({ app });



const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Create a new instance of an Apollo server with the GraphQL schema
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// const productRoutes = require('./routes/productRoutes');
// app.use('/api', productRoutes);

const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
    
}
// Start the Apollo server
startApolloServer();



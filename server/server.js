const express = require('express');
require('dotenv').config();
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
constconnectDB = require('./config/db');
// Import the two parts of a GraphQL schema
const typeDefs = require('./schema');
const db = require('./config/connection');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    });

const app = express();

//Connect to database
connectDB();

app.use('graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}));
    

// Add middleware to integrate Apollo server with Express
// server.applyMiddleware({ app });
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');
// const { authMiddleware } = require('./utils/auth')

// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');
// const auth = require('./utils/auth');

// const PORT = process.env.PORT || 3001; 
// const app = express();
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
// });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Create a new instance of an Apollo server with the GraphQL schema
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


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

//             console.log(`API server running on port ${PORT}`);
//             console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
// //         })
// //     })
// // };

// startApolloServer();
// /*
// db.once('open', () => {
//     app.listen(PORT, () => {
//         console.log(`API server running on port ${PORT}`);
//     })
// });*/


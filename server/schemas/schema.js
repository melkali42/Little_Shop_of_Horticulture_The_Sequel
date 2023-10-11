const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql');

//Client type
const ClientType = new GraphQLObjectType({
    name: 'Client', //plants arrays to be added**
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: { //all plants to be added**
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return Client.find({});
            }
        },
        client: { //plant
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args.id);
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
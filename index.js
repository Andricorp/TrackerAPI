// const initDb = require('./db')
// initDb()
// const data = require('./db/model').data.fillDB
// data()


const express = require('express');
const cors  = require('cors')
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
// GraphQL schema
//
var schema = buildSchema(`
    type Query {
        getUserById(_id: String!): User
    }
    type Mutation {
        createUser(email: String!, name: String!, password: String!, phones: [String]): User
    }

    type User {
        email: String
        name: String
        phones: [String]
    }
`);


async function getUserById({_id}){
    return await User.findOne({_id})
}


async function createUser(params){
    return await (new User(params)).save()
}


// Root resolver
var root = {
    getUserById,

    createUser,
};



// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors())

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));



app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
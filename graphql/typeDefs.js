const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type User {
        id : Int!
        firstname : String!
        lastname : String!
        phone : String!
        email : String!
    }

    type Query {
        getUsers : [User]
        getUser(id : Int!) : User
    }

    type Mutation {
        addUser(firstname : String! , lastname : String! , phone : String! , email : String!) : User!
    }
`;

module.exports = typeDefs;

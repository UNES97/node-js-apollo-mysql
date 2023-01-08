require('dotenv').config();
const express = require('express');
const { ApolloServer , gql } = require('apollo-server-express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require("./models");
const app = express();

/* CORS Management */
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Sync Database */
db.Connection.sync({force: false}).then(() => {
    console.log('Resynced DB');
});

/* GraphQL */

/* TypeDefs */
const typeDefs = require('./graphql/typeDefs')

/* Resolvers */
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({ typeDefs , resolvers , context : { db } });
server.start().then(() => {
    server.applyMiddleware({
        app,
    });
});

/* Default Route (Home) */
app.get('/', (req, res) => {
    res.status(200);
    res.json("Apollo GraphQL - Unes Gintoki &copy; 2022 V0.01");
});

app.listen(PORT = 3000, (error) =>{
    if(!error)
        console.log("Server is Successfully Running http://localhost:" + PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);
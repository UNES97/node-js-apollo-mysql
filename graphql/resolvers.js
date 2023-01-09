const db = require("../models");
const resolvers = {
    Query : {
        async getUsers(root , args , {db}){
            return await db.users.findAll();
        },

        async getUser(root , args , {db}){
            return await db.users.findByPk(args.id);
        }
    },
    Mutation : {
        async addUser(root , args , {db}){
            return await db.users.create({
                firstname : args.firstname,
                lastname : args.lastname,
                email : args.email,
                phone : args.phone
            });
        }
    }
};

module.exports = resolvers;
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
        async addUser(root , { firstname , lastname , email , phone } , {db}){
            return await db.users.create({
                firstname,
                lastname,
                email,
                phone
            });
        }
    }
};

module.exports = resolvers;
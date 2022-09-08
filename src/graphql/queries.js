const { GraphQLList, GraphQLID } = require('graphql');

const {UserType} = require('./types');

const { User } = require('../models');
console.log(UserType)

const users = {
    type: new GraphQLList(UserType),
    description: "Query all users in the database",
    resolve(parent, args){
        return User.find()
    }

}


const user ={
    type: UserType,
    description: "query user by id",
    args: {
        id: {type: GraphQLID}
    }, resolve(parent, args){
        return User.findById(args.id)
    }

}


module.exports = {
    users,
    user
}
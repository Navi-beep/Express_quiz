//import built in graphql type

const { GraphQLObjectType, GraphQLID, GraphQLString} = require('graphql');
const { model } = require('mongoose');

const { User } = require('../models');


const UserType = new GraphQLObjectType(
    {
        name: 'User',
        description: 'User type',
        fields: () => ({
            id: {type: GraphQLID}, 
            username: { type: GraphQLString},
            email: {type: GraphQLString}
        })
    }
)
console.log(UserType)
module.exports = {
    UserType
}
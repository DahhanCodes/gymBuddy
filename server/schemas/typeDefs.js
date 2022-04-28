const { gql } = require('apollo-server-express');

const typeDefs = gql`
   #Custom Types
   type User {
      id: ID
      email: String
      password: String
      token: String
      favourites: [String]
   }

   input UserInput {
      email: String
      password: String
   }

   type Query {
      getUser(token: String): User
   }

   type Mutation {
      createUser(user: UserInput): User
   }
`;

module.exports = typeDefs;

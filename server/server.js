const express = require('express');
const userRoutes = require('./userRoutes');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');

const server = new ApolloServer({
   typeDefs,
   resolvers,
   //context: isAuth,
});
server.start().then(() => {
   server.applyMiddleware({ app });
});

require('./db');
app.use(cors());

app.use(express.urlencoded({ exteneded: true }));
app.use(express.json());
app.use(userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Server running at ${PORT}`);
   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});

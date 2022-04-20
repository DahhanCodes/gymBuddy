const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const path = require('path');
const cors = require('cors');
<<<<<<< HEAD
const { isAuth } = require('./middlewares/isAuth');
=======
>>>>>>> 716ee4044c4903d80c32e3c6b028b5f10a9d2545

const PORT = process.env.PORT || 3001;
const app = express();

//initialise cors
app.use(
   cors({
      origin: true,
   })
);

const server = new ApolloServer({
   typeDefs,
   resolvers,
<<<<<<< HEAD
   context: isAuth,
=======
>>>>>>> 716ee4044c4903d80c32e3c6b028b5f10a9d2545
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
   app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
   });
});

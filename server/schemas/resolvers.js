const User = require('../userModel');

const resolvers = {
   Query: {
      async getUser(_parent, { token }) {
         try {
            return await User.findOne({ token });
         } catch (e) {
            console.log(e);
            res.status(500).send();
         }
      },
   },
   Mutation: {
      async createUser(_parent, { user }) {
         try {
            const newUser = await User.create({ email: user.email, password: user.password });
            await newUser.generateToken();
            return newUser;
         } catch (e) {
            console.log(e);
            res.status(500).send();
         }
      },
   },
};

module.exports = resolvers;

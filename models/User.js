const { Schema, model, Types } = require('mongoose');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
const { isEmail, isStrongPassword } = require('validator').default;
=======

>>>>>>> 716ee4044c4903d80c32e3c6b028b5f10a9d2545
const UserSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
<<<<<<< HEAD
         validate: [isEmail, 'Invalid email format!'],
=======
>>>>>>> 716ee4044c4903d80c32e3c6b028b5f10a9d2545
      },
      password: {
         type: String,
         required: true,
<<<<<<< HEAD
         //Todo: Need to uncomment this validation later
         // validate: [
         //    isStrongPassword,
         //    'Password must have 8 charachters, 1 lowercase, 1 uppercase, 1 number and 1 symbol',
         // ],
=======
>>>>>>> 716ee4044c4903d80c32e3c6b028b5f10a9d2545
      },
      age: {
         type: Number,
         required: true,
      },
   },
   {
      timestamps: true,
   }
);

<<<<<<< HEAD
//Hash the password
UserSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      return next();
   }
   try {
      const salt = await bcrypt.genSalt(12);
      this.password = await bcrypt.hash(this.password, salt);
   } catch (error) {
      return next(error);
   }
});

UserSchema.methods = {
   //helper function for validate the password
   async validatePassword(password) {
      return bcrypt.compare(password, this.password);
   },
};

=======
>>>>>>> 716ee4044c4903d80c32e3c6b028b5f10a9d2545
const User = model('User', UserSchema);

module.exports = User;

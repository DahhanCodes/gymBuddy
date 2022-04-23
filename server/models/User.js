const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');
//to check valid passwrod input
const { isEmail, isStrongPassword } = require('validator').default;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

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

const User = model('User', UserSchema);

module.exports = User;
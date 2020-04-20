var mongoose = require('mongoose');
var validator = require('validator')
var UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  car: String,
  password: String,
  roles: String,
  email: {
      type: String,
      unique: true,
      validate: (value) => {
        return validator.isEmail(value)
      }
   }
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');

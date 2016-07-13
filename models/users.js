var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: {unique: true}
  },
  password: {
  	type: String,
  	required: true
  }
});

var User = mongoose.model('Users', UserSchema);
module.exports = User;

var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var UserSchema = new Schema({
  username: { 
    type: String, 
    unique: true
  },
  salt: String,
  password: String
});

var UserModel = mongoose.model('UserModel',UserSchema);

UserSchema.pre('save', function(next) {
  var self = this;
  UserModel.count({username: self.username}, function(error, docs) {
    if (!docs.length) {
      next();
    } else {
      console.log('user exists');
      next(new Error("User Exists"));
    }
  });
});

module.exports = mongoose.model('User', UserSchema);
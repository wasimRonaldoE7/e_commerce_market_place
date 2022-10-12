const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  password:String,
  type: {
    type: String,
    enum : ['buyer','seller'],
},

});

const UserModel = mongoose.model("user", UserSchema);

module.exports=UserModel;
 
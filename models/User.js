const mongoose = require('mongoose');
const { Schema } = mongoose; //es2015 version of const schema = mongoose.schema
//create a schema and add records
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);

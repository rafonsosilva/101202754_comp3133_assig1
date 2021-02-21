const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  }
})

var User = mongoose.model('User', userSchema)
module.exports = {User, userSchema}
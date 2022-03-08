const { default: mongoose } = require("mongoose");

const schemauser= mongoose.Schema;

const userschema = new schemauser({C_ID:String,Contact:String,Name:String})

const User = mongoose.model('user' , userschema)

module.exports = User;
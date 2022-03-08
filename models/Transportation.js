const { default: mongoose } = require("mongoose");

const schematrans = mongoose.Schema;

const transschema = new schematrans({C_ID:Number,id:Number,Name:String,Info:String})

const Transportation = mongoose.model('transportation' , transschema)

module.exports = Transportation;
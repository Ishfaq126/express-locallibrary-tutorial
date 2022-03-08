const { default: mongoose } = require("mongoose");

const schemaguide = mongoose.Schema;

const guideschema = new schemaguide({C_ID:String,Contact:String,Name:String,Info:String})

const Guide = mongoose.model('guide' , guideschema)

module.exports = Guide;
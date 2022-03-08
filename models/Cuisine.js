const { default: mongoose } = require("mongoose");

const schemacuisine = mongoose.Schema;

const cuisineschema = new schemacuisine({C_ID:Number,id:Number,Name:String,Info:String})

const Cuisine = mongoose.model('cuisine' , cuisineschema)

module.exports = Cuisine;
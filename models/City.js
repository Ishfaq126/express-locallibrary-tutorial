const { default: mongoose } = require("mongoose");

const schemacity = mongoose.Schema;

const cityschema = new schemacity({id:Number,Name:String,History:String})

const City = mongoose.model('city' , cityschema)

module.exports = City;
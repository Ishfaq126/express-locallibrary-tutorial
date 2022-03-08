const { default: mongoose } = require("mongoose");

const schemadest = mongoose.Schema;

const destschema = new schemadest({C_ID:Number,Des_Name:String,History:String,id:Number})

const Destination = mongoose.model('destination' , destschema)

module.exports = Destination;
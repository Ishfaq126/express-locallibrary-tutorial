const { default: mongoose } = require("mongoose");

const schemahotel = mongoose.Schema;

const hotelschema = new schemahotel({C_ID:String,M_ID:String,Name:String,Info:String})

const Hotel = mongoose.model('ad' , hotelschema)

module.exports = Hotel;
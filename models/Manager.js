const { default: mongoose } = require("mongoose");

const schemamanager = mongoose.Schema;

const managerschema = new schemamanager({C_ID:String,H_ID:String,Contacts:String,Name:String,Info:String})

const Manager = mongoose.model('manager' , managerschema)

module.exports = Manager;
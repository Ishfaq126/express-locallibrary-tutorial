const { default: mongoose } = require("mongoose");

const schemaadmin = mongoose.Schema;

const adminschema = new schemaadmin({Contact:String,Name:String,Auth:String,username:String,password:String})

const Admin = mongoose.model('admin' , adminschema)

module.exports = Admin;
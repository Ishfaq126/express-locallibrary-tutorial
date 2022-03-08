const { default: mongoose } = require("mongoose");

const schemagreviews = mongoose.Schema;

const greviewsschema = new schemagreviews({G_ID:String,U_ID:String,Stars:String,Info:String})

const GReviews = mongoose.model('greviews' , greviewsschema)

module.exports = GReviews;
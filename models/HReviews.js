const { default: mongoose } = require("mongoose");

const schemahreview = mongoose.Schema;

const hreviewschema = new schemahreview({H_ID:String,U_ID:String,Stars:String,Info:String})

const HReviews = mongoose.model('hreview' , hreviewschema)

module.exports = HReviews;
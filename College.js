const mongoose = require("mongoose");

const CollegeSchema = mongoose.Schema({
    college_name:String,
    address:String
});

module.exports = mongoose.model('colleges',CollegeSchema);
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const coursesSchema = new Schema({
    userName: {type: String, required: true},
    courseName: {type: String, required: true},
    // courseId: String
},
{timestamps: true});

const Courses = mongoose.model('courses', coursesSchema);

module.exports = Courses;
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const courseSchema = new Schema({
    userName: {type: String, required: true},
    courseName: {type: String, required: true},
    // courseId: String
},
{timestamps: true});

const Course = mongoose.model('courses', courseSchema);

module.exports = Course;
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cources"
    },
    chapters: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "chapter"
        },
        name: {type: String, required: true},
        index: {type: Number, required: true}
    }]
},
{timestamps: true});

const Course = mongoose.model('course', courseSchema);

module.exports = Course;
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const chapterSchema = new Schema({
    // name: {type: String, required: true}, // may be not necessary
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses"
    },
    name: {type: String, required: true},
    index: {type: Number, required: true},
    content: {type: String}
},
{timestamps: true});

const Chapter = mongoose.model('chapter', chapterSchema);

module.exports = Chapter;
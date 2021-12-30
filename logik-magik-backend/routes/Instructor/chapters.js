const express = require("express");
const router = express.Router();
const Course = require('../../models/course');
const Chapter  = require('../../models/chapter');

async function createChapters(chapter, courseId, fresh, existent) {
    return await Chapter.create({
        courseId: courseId,
        name: chapter.name,
        index: chapter.index,
        content: ''
    });
}

async function updateChapters(chapter, courseId, fresh, existent) {
    return await Chapter.findOneAndUpdate({_id: chapter.id, courseId: courseId}, {index: chapter.index});
}

router.put('/', (req, res) => {
    //request will have: {chapters[{chapterId, chapterName, chapterOrder}], courseId}

    //TODO: get the username from the token sent from client.
    // console.log({req});
    // Course.findOneAndUpdate({courseId: req.body.courseId})
    //     .then(course => {
    //         console.log({course});
    //         res.json(course);
    //     }).catch(err => {
    //         res.json(err);
    //     });
    const fresh = {chapter: [], error: []};
    const existent = {chapter: [], error: []};
    const allRequests = req.body.chapters.map(chapter => {
        if(!chapter.id){ //null chapterId - means newly created one from client side
            //Create a new chapter in Chapter collection, and push the same for Course
            return createChapters(chapter, req.body.courseId, fresh, existent);
            // Chapter.create({
            //     courseId: req.body.courseId,
            //     name: chapter.name,
            //     index: chapter.index,
            //     content: ''
            // }).then(value => {
            //     console.log({value});
            //     fresh.chapter.push(value);
            // }).catch(err => {
            //     console.log("error=", err);
            //     fresh.error.push("Unable to create a new chapter: ", chapter.name);
            // })
        } else {    //Already created chapter but may have updated order
            //update chapter order in Course.
            return updateChapters(chapter, req.body.courseId, fresh, existent);
            // Chapter.findOneAndUpdate({_id: chapter.id, courseId: req.body.courseId}, {index: chapter.index})
            //     .then(value => {
            //         existent.chapter.push(value);
            //     }).catch(err => {
            //         existent.error.push("Unable to update the chapter: ", chapter.name);
            //     });
        }
    });
    Promise.all(allRequests).then((body) => {
        body.forEach(res => {
            fresh.chapter.push(res);
        })
        res.json(fresh);
    }).catch(err => {
        res.json(err);
        console.log(err);
        fresh.error.push(err);
    });
    //Not working like this:
    // if((fresh.chapter.length + fresh.error.length + existent.chapter.length + existent.error.length) === req.body.chapters.length)
        // res.json({"fresh": fresh, "existent": existent});
    // Chapters.find({courseId})
    //     .then(data => {
    //         res.json(data);
    //     })
    // Chapters.create({
    //     userName: 'sidzzy',
    //     courseName: req.body.courseName,
    // }).then(data => {
    //     res.json(data);
    // }).catch(err => {
    //     res.json(err);
    // });
    // res.send(`This will store all your course list: ${req.body}`);
});

router.get('/:courseId', (req, res) => {
    Chapter.find({courseId: req.params.courseId})
        .then(chapters => {
            res.json(chapters);
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Courses = require('../../models/courses');

router.get('/', (req, res) => {
    //TODO: get the username from the token sent from client and use that.
    Courses.find({ "userName" : "sidzzy" }).then(course => {
        res.json(course);
    });
    // res.send("will send you the course list");
});

router.post('/', (req, res) => {
    //TODO: get the username from the token sent from client.
    Courses.create({
        userName: 'sidzzy',
        courseName: req.body.courseName,
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
    // res.send(`This will store all your course list: ${req.body}`);
});

router.delete('/:courseId', (req, res) => {
    //TODO: Verify whether the course id belongs to the requested user or not.
    Courses.findByIdAndRemove(req.params.courseId)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
});

module.exports = router;
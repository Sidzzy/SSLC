const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const cors = require("cors");
const Signature = require('./models/test.js');
const Course = require('./models/course.js');
const app = express();

//set from where ur going to hit it from. : https://www.npmjs.com/package/cors
const corsOptions = {
    origin: "http://localhost:3002"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//TODO: This way it was trowing error as url is undefined
// const url = 'mongodb+srv://admin:<88888888>@cluster0.lpfph.mongodb.net/<logikMagik>?retryWrites=true&w=majority';
// const url = process.env.MONGOLAB_URI;

// mongoose.connect(url, function (err, db) {
//     if (err) {
//       console.log('Unable to connect to the mongoDB server. Error:', err);
//     } else {
//       console.log('Connection established to', url);
//     }
// });
mongoose.connect('mongodb+srv://admin:88888888@cluster0.lpfph.mongodb.net/logikMagik?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
      console.log("------------------Connected to db");
  })
  .catch(err => {
    console.log("--------------------Cannot connect to the database!", err);
    process.exit();
});

app.get('/', (req, res) => {
    console.log("Home has been hit");
    res.send("welcome to home page...");
});

app.get('/instructor/course', (req, res) => {
    //TODO: get the username from the token sent from client and use that.
    Course.find({ "userName" : "sidzzy" }).then(course => {
        res.json(course);
    });
    // res.send("will send you the course list");
});

app.post('/instructor/course', (req, res) => {
    console.log(req.body.courseName);
    //TODO: get the username from the token sent from client.
    Course.create({
        userName: 'sidzzy',
        courseName: req.body.courseName,
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
    // res.send(`This will store all your course list: ${req.body}`);
});

app.delete('/instructor/course/:courseId', (req, res) => {
    //TODO: Verify whether the course id belongs to the requested user or not.
    Course.findByIdAndRemove(req.params.courseId)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
});

//TEST apis
// app.get('/api/signatures', function(req, res) {
//     Signature.find({}).then(eachOne => {
//       res.json(eachOne);
//     })
// });

// app.post('/api/signatures', function(req, res) {
//     Signature.create({
//         guestSignature: req.body.SignatureOfGuest,
//         message: req.body.MessageofGuest,
//     }).then(signature => {
//         res.json(signature)
//     });
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Backend Server Started on Port', PORT);
});
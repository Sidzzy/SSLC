const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./models/test.js')
const app = express();

const url = 'mongodb://localhost:27017/signatures';

mongoose.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
    }
   });

app.get('/', (req, res) => {
    console.log("Home");
    res.send("welcome to home page");
});

app.get('/api/signatures', function(req, res) {
    Signature.find({}).then(eachOne => {
      res.json(eachOne);
      })
    })

app.post('/api/signatures', function(req, res) {
    Signature.create({
        guestSignature: req.body.SignatureOfGuest,
        message: req.body.MessageofGuest,
    }).then(signature => {
        res.json(signature)
    });
    });

app.listen(3100, () => {
    console.log('Backend Server Started');
});
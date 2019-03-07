'use strict';

var express = require('express');
var router = express.Router();
const request = require('superagent');


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index');
});

//Admin panel
router.get('/loginAndRegister', (req, res) => {
    res.render('loginAndRegister', {data :req.query});
});

router.post('/register', (req, res) => {
    console.log(req.body)
    request.post(`http://localhost:3000/api/users/register`)
    .send({ email : req.body.email, password : req.body.password, retypepassword : req.body.retypepassword})
    .end(function(err, response) {
        if (err) {
            console.log(err)
        } else {
            console.log(response.body)
        }
        res.render('loginAndRegister');
    });
});

router.post('/login', (req, res) => {
    request.post(`http://localhost:3000/api/users/login`)
    .send({ email : req.body.email, password : req.body.password})
    .end(function(err, response) {
        if (err) {
            console.log(err)
        } else {

            if ( !response.body.error ) {
                res.redirect('/users');
            } else {
                res.redirect('loginAndRegister');
            }

        }

    });
});

//Line
router.get('/line', (req, res) => {
    res.render('error');
});

//pie
router.get('/pie', (req, res) => {
    res.render('error');
});

//bar
router.get('/bar', (req, res) => {
    res.render('error');
});

//maps
router.get('/maps', (req, res) => {
    res.render('error');
});


module.exports = router;

const request = require('superagent');
const API_URL = 'http://localhost:3000/api/';
const helpers    = require('../helpers/util');

module.exports = (app, moment) => {

    app.get('/',helpers.isLoggedIn, (req, res) => {
        res.render('users/list')
    });

    app.get('/home',helpers.isLoggedIn, (req, res) => {
        res.render('users/list', { user : req.user, moment})
    });

    app.get('/data',helpers.isLoggedIn, (req, res) => {
        res.render('users/data', { user : req.user})
    });

    app.get('/datadate',helpers.isLoggedIn, (req, res) => {
        res.render('users/datadate', { user : req.user, moment})
    });

    app.get('/maps',helpers.isLoggedIn, (req, res) => {
        res.render('users/maps', { user : req.user, moment})
    });
};

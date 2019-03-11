const request = require('superagent');
let API_URL ="http://localhost:3000/api/data"
const moment = require('moment');

module.exports = (app, moment) => {

    app.get('/', (req, res) => {
        res.render('users/list')
    });

    app.get('/', (req, res) => {
        res.render('index')
    });

    app.get('/bar', (req, res) => {
        res.render('dashboard/bar')
    });

    app.get('/pie', (req, res) => {
        res.render('dashboard/pie')
    });

    app.get('/map', (req, res) => {
        res.render('dashboard/maps',{moment} )
    });
};

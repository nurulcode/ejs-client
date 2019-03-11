const request = require('superagent');
const API_URL = 'http://localhost:3000/api/';


module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('users/list')
    });

    app.get('/home', (req, res) => {
        res.render('users/list')
    });

    app.get('/data', (req, res) => {
        console.log(req.user)
        res.render('users/data', { user : req.user})
    });

    app.get('/dataDate', (req, res) => {



        res.render('users/listDataDate')
    });

    app.get('/maps', (req, res) => {
        res.render('users/listMaps')
    });
};

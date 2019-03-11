const request = require('superagent');
let API_URL ="http://localhost:3000/api/data"

module.exports = (app) => {

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


    app.get('/maps', (req, res) => {
        res.render('users/listMaps')
    });
};

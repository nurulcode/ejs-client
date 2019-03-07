var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.render('users/list')
});

router.get('/home', (req, res) => {
    res.render('users/list')
});

router.get('/data', (req, res) => {
    res.render('users/listData')
});

router.get('/dataDate', (req, res) => {
    res.render('users/listDataDate')
});

router.get('/maps', (req, res) => {
    res.render('users/listMaps')
});

module.exports = router;

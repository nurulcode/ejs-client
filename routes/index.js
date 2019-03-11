'use strict';
const helpers    = require('../helpers/util');
module.exports = (app, passport, request) => {
    //Dashboard
    app.get('/', (req, res, next) => {
        res.render('index');
    });

    //Admin Panel
    app.get('/login', (req, res) => {
        res.render('login', { message: req.flash('signIn') });
    });

    app.get('/signup', (req, res) => {
        res.render('signup', { message: req.flash('signUpMsg') });
    });

    app.post('/signup',
    passport.authenticate('local-signup', {
        successRedirect : '/home',
        failureRedirect : '/signup',
        failureFlash    : true
    }))

    app.post('/login',
    passport.authenticate('local-login', {
        successRedirect : '/home',
        failureRedirect : '/login',
        failureFlash    : true
    }));

    app.get('/home', helpers.isLoggedIn, (req, res) => {
        res.render('home', { user : req.user});
    });

    app.get('/logout', helpers.isLoggedIn, function(req, res){
        // console.log(req.user)



        request
        .get('http://localhost:3000/api/users/destroy')
        .send({email: req.user.data.email})
        .then(res => {
            console.log(res.body.logout)
        }).catch( err => console.log(err))

        req.logout();
        res.redirect('/');

    });

};


//
//
//
// app.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });
//
//
// router.get('/home', (req, res,) => {
//     res.render('home')
// })
//
//
// //Line
// router.get('/line', (req, res) => {
//     res.render('error');
// });
//
// //pie
// router.get('/pie', (req, res) => {
//     res.render('error');
// });
//
// //bar
// router.get('/bar', (req, res) => {
//     res.render('error');
// });
//
// //maps
// router.get('/maps', (req, res) => {
//     res.render('error');
// });

'use strict';

module.exports = (app, passport) => {
    //Dashboard
    app.get('/', (req, res, next) => {
        res.render('index');
    });

    //Admin Panel
    app.get('/loginAndRegister', (req, res) => {
        res.render('loginAndRegister', { message: req.flash('logNreg') });
    });

    app.get('/signup', (req, res) => {
        res.render('loginAndRegister', { message: req.flash('signUpMsg') });
    });

    app.post('/signup',
    passport.authenticate('local-signup', {
        successRedirect : '/home',
        failureRedirect : '/loginAndRegister',
        failureFlash    : true
    }))

    app.get('/login', (req, res) => {
        res.render('loginAndRegister', { message: req.flash('loginMsg') });
    });

    app.post('/login',
    passport.authenticate('local-login', {
        successRedirect : '/home',
        failureRedirect : '/loginAndRegister',
        failureFlash    : true
    }));

    app.get('/home', isLoggedIn, (req, res) => {
        res.render('home', { user : req.user});
    });

    app.get('/logout', isLoggedIn, function(req, res){
        req.logout();
        res.redirect('/');
    });

};

function isLoggedIn(req, res, next) {
    console.log(req.user)
    if(req.user) return next();
    res.redirect('loginAndRegister');
}


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

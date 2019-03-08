const LocalStrategy = require('passport-local').Strategy
const request = require('superagent');

const API_URL = 'http://localhost:3000/api/';

module.exports = (passport) => {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use('local-signup', new LocalStrategy ({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    }, (req, email, password, done) => {

        process.nextTick(function(){
            if (email)
            email = email.toLowerCase();

            request.post(API_URL + 'users/register')
            .send({ email, password, retypepassword: req.body.retypepassword })
            .set('Accept', 'application/json')
            .then(res => {
                if (!res.body.error) {
                    return done(null, res.body.data);
                } else {
                    return done(null, false, req.flash('registerMessage', res.body.message));
                }
            })
            .catch(err => {
                if (err) return done(null, false, req.flash('registerMessage', 'Something is wrong, please call your administrator'))
            })
        });

    }))
};

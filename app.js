'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const logger = require('morgan');
const passport = require('passport');
const request = require('superagent');
var moment = require('moment');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'this is secret',
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./models/passport')(passport);
require('./routes/index')(app, passport, request);
require('./routes/users')(app, moment);
require('./routes/dashboards')(app);


module.exports = app;

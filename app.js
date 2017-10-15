var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//App api routes

//Util
var TripConstructor = require('./util/TripConstructor')
//MongoDB requirements
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var mongo_connection_uri = 'mongodb://ankith:test@ds151008.mlab.com:51008/journey';

var app = express();

// view engine setup
//app.set('pages', path.join(__dirname, 'pages'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.set('view engine', 'jade');
app.use('/', express.static(__dirname + '/'));

module.exports = app;

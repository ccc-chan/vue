var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    var url = req.originalUrl;
    if( url == '/'){
        app.locals.ind = 0;
    }else if( url == '/info'){
        app.locals.ind = 1;
    }else if( url == '/dynamics' || url.indexOf("page1") >= 0){
        app.locals.ind = 2;
    }else if( url == '/construction' || url.indexOf("page2") >= 0){
        app.locals.ind = 3;
    }else if( url === '/teacher'){
        app.locals.ind = 4;
    }else if( url.indexOf("computer") >= 0 || url.indexOf("artdesign") >= 0 || url.indexOf("accouting") >= 0){
        if( url.indexOf("zszt") >= 0){
            app.locals.ind = 6;
        }else{
            app.locals.ind = 5;
        }
    }else if( url == '/sconstruction' || url.indexOf("page3") >= 0){
        app.locals.ind = 6;
    }else if( url == '/employment' || url.indexOf("page4") >= 0){
        app.locals.ind = 8;
    }else if( url == '/contact'){
        app.locals.ind = 9;
    }else if( url == '/zszt' || url == '/zszt/'){
        app.locals.ind = 0;
    }else if( url == '/zszt/info'){
        app.locals.ind = 1;
    }else if( url == '/zszt/news' || url.indexOf("/zszt/page1") >= 0){
        app.locals.ind = 2;
    }else if( url == '/zszt/policy' || url.indexOf("/zszt/page2") >= 0){
        app.locals.ind = 3;
    }else if( url == '/zszt/brochure' || url.indexOf("/zszt/page3") >= 0){
        app.locals.ind = 4;
    }else if ( url == '/zszt/plan' || url.indexOf("/zszt/page4") >= 0){
        app.locals.ind = 5;
    }else if( url == '/zszt/sign'){
        app.locals.ind = 7;
    }else if( url == '/zszt/contact'){
        app.locals.ind = 8;
    }
    next();
});

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

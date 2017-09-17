var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var mongo = require('mongoskin');
var validator = require('express-validator');

var index = require('./routes/index');
var users = require('./routes/users');
var add = require('./routes/add');
var update = require('./routes/update');
var del = require('./routes/delete');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
const port = app.get('port');


app.use(function(req,res,next){
  var db = mongo.db('mongodb://127.0.0.1:27017/AishaDB',{native_parser:true});
  req.db=db;
  next();
  db.close();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(validator());

app.use('/', index);
app.use('/users', users);
app.use('/add', add);
app.use('/update', update);
app.use('/delete', del);

app.listen(port,function(){
    console.log('The server is running on port %s', port);
});

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

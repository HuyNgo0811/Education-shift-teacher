var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teacherRouter = require('./routes/teacher');
var classRouter = require('./routes/class');
var excelRouter = require('./routes/excel');
var tkbRouter = require('./routes/tkb')

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/teachershift-new');
mongoose.connect('mongodb+srv://huynqfx20307:MmfnmVJZW4eb1Pdd@huyeducation.r4bgrx9.mongodb.net/teacherShift-ver-2?retryWrites=true&w=majority&appName=validate');

const Excel = require('exceljs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teacher', teacherRouter);
app.use('/class', classRouter);
// app.use('/grade', gradeRouter);
app.use('/tkb',tkbRouter);
// Sử dụng route export Excel
app.use('/export', excelRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const {sequelize} = require('./models');
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api', usersRouter);





// const {user} = require('./models');
// // user.create({user_id:'inhoha',password:'inhoha', name:'inhoha', email:'inhoha'});
// user.create({
//   user_id: 'test',
//   password: '$2b$10$6T/r3lBFhH7JmD6eW4w/QOA.4U/VnMI4gESBkLW6qsSuBOxSIhKXS',
//   name: 'test',
//   email: 'test',
// }).then(()=>{console.log("create!!!!!")}).catch(()=>{console.log("fail")})

// user.findOne({where: {user_id: 'iha9704'}}).then(console.log);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const {
  ApolloServer,
} = require('apollo-server-express');
const SCHEMA = require('./graphql/shcema')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// apply cross origin resources sharing "CORS"
app.use(cors({
  origin: '*', // TODO change on production build
  optionsSuccessStatus: 200
}));



const server = new ApolloServer(SCHEMA);
server.applyMiddleware({
  app
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hadaf API'
  })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
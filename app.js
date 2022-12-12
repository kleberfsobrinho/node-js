const express = require('express');
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express();

// 1) MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json()); // puts the body on the request
app.use(express.static('./public')) // serve static files

// 2) ROUTE

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

module.exports = app;

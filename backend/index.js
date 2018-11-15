require('dotenv').config();
const process = require('process');
const { requireService, requireController } = require('./helpers/requireHelper');
const authService = requireService('authService');
const { errorResponse } = requireController('basicController');
const initializeDb = require('./helpers/initializeDb');
const express = require('express');
const checkAuth = require('./middlewares/checkAuth');
const middlewares = require('./middlewares');
const getRoutes = require('./routes');
const app = express();

middlewares.forEach(middleware => app.use(middleware));

authService.initJwt();

initializeDb({
  host: process.env.MONGODB_HOST,
  port: process.env.MONGODB_PORT,
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASSWORD,
  dbName: process.env.MONGODB_DATABASE
});

app.use('/api/v1', getRoutes(checkAuth));

app.use((req, res, next) => {
  const err = new Error('resource not found');
  err.status = 404;

  errorResponse(res, err);
});

app.use((err, req, res, next) => {
  errorResponse(res, err);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

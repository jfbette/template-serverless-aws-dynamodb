const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {logRequest} = require('./middleware/logger');
const { handlerError } = require('./utils/error');
const userRouter = require('./routes/users');
const dynamoose = require('dynamoose');

const { IS_OFFLINE } = process.env;

 if (IS_OFFLINE === 'true') {
  dynamoose.aws.ddb.local();
 }

app.use(bodyParser.json({ strict: false }));

// Log every request
app.use(logRequest);

// Handle uncaught errors
app.use((err, req, res, next) => {
 handlerError(err, res);
});

// Import all routes
app.use('/users', userRouter);

module.exports.handler = serverless(app);
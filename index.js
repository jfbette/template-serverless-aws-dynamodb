const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const {postLogger, logRequest} = require('./middleware/logger');
const dynamoose = require("dynamoose");
var Users = require('./models/users.js');




const userRouter = require('./routes/users');

const { DYNAMODB_TABLE, IS_OFFLINE } = process.env;

const dynamoDb = IS_OFFLINE === 'true' ?
  dynamoose.aws.ddb.local(): "";

  
app.use(bodyParser.json({ strict: false }));

// Log every request
app.use(logRequest);

// Handle uncaught errors
app.use(postLogger);

// Import all routes
app.use('/users', userRouter);
//Swagger Configuration  

module.exports.handler = serverless(app);
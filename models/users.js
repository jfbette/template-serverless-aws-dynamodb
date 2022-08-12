const dynamoose = require("dynamoose");

const User = new dynamoose.Schema({
    "id": {"hashKey": true, "type": String, "required": true},
    "email": {"type": String, "required": true},
    "verfied": Boolean,
    "subscriptionType": String,
    "subscriptionDate": Date

}, {
    "saveUnknown": false,
    "timestamps": true
});

const Users = dynamoose.model(process.env.DYNAMODB_TABLE, User);


module.exports = Users;
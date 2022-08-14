const dynamoose = require("dynamoose");

const User = new dynamoose.Schema({
    "id": {"hashKey": true, "type": String, "required": true},
    
}, {
    "saveUnknown": false,
    "timestamps": true
});

dynamoose.logger.providers.set(console);
const Users = dynamoose.model(process.env.DYNAMODB_TABLE, User, {"create": true, "waitForActive": false});


module.exports = Users;
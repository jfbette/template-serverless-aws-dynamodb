
const { randomUUID } = require('crypto');
const Users = require('../models/users.js');
const logger = require("../utils/logger.js");
const { ErrorHandler } = require("../utils/error");
const dynamoose = require("dynamoose");

function createUser(username, password) {

    const uuid = randomUUID();
    const newUser = new Users({
        id: uuid,
        //email: username,
    });
    
    logger.info(`Document ${newUser.id} stop `);

    //TODO: test if user already exists
    logger.info("before saving user");
    /*newUser.save((error, result) => {
        if (error) {
            logger.error("Can't create user " + username + "(" + uuid + ")");
            // TODO
            throw new ErrorHandler(500, "Can't create user " + username);
        } else {
            console.log("toto");
            logger.info("User " + username + " has been successfully created with ID: "+ uuid);
        }
    });
    logger.info("after creating user");*/
    
    newUser.save().then( () => {
       logger.info("Success")})
    .catch(() => logger.error("Error"));  
    
    logger.info("after saving user");
}


module.exports = {
    createUser,
};
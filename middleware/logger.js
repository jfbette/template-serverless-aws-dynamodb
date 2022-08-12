const logger = require("../utils/logger");

function postLogger(err, req, res, next) {
    if (err) {
        logger.error(err);
    }

    res.status(500).json({error: 'Internal service error'});
};

// Will log every request 
function logRequest(req, res, next) {
    logger.info(req.url);
    next();
  }

module.exports = { postLogger, logRequest};
    
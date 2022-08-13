const logger = require("../utils/logger");

function logRequest(req, res, next) {
    logger.info(req.url);
    next();
  }

module.exports = { logRequest};
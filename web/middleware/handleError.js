const Boom = require('boom');
const config = require('nconf');

module.exports = (app) => {
  // Error: 404
  app.use((req, res, next) => {
    logger.info(`url : ${req.url}`);
    next(Boom.notFound('Invalid endpoint'));
  });

  app.use((err, req, res, next) => {
    // Convert if error does not belong to Boom object
    logger.error(`URL : ${req.originalUrl}`);
    const boomError = err.isBoom ? err : Boom.boomify(err, { statusCode: 500 });
    /** Boom error */
    const payload = {
      error: boomError.output.payload.error,
      message: boomError.message,
      statusCode: boomError.output.payload.statusCode,
    };
    if (config.get('NODE_ENV') === 'development') logger.error(`Stack: ${boomError.stack}`);
    logger.error(`Name: ${payload.error} | message: ${payload.message} | status: ${payload.statusCode}`);
    res.status(404).json({
      success: false,
      data: payload,
    });
    next();
  });
};
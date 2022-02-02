const config = require('nconf');
const http = require('http');
const authRouter = require('./authRouter');
const { tokenAuthentication } = rootRequire('service/AuthenticationService');
const dashboardRouter = require('./dashboardRouter');
const { basic, handleError } = require('./middleware');

const app = rootRequire('config/express')();
const xssFilter = require('./middleware/xssFilter');

const appServer = http.Server(app);

function init() {
  basic(app);
  xssFilter(app);
  app.get('/favicon.ico', (req, res) => res.status(204));
  authRouter(app);
  // tokenAuthentication(app);
  dashboardRouter(app);
  handleError(app);

  appServer.listen(config.get('PORT'), (err) => {
    if (err) {
      logger.error(`Error while starting server at port ${config.get('PORT')} | Error: ${err.message}`);
    }
    logger.info(`Environment: ${config.get('NODE_ENV')}`);
    logger.info(`Express Server Up and Running @PORT: ${config.get('PORT')} | at localhost`);
  });
}

module.exports = {
  init,
  appServer,
};
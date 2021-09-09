const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const expressSession = require('express-session');
const nocache = require('nocache');
const helmet = require('helmet');
const frameguard = require('frameguard');
const cookieParser = require('cookie-parser');
const passport = require('passport');
// const rateLimiterMiddleware = require('./rateLimiter');

function basic(app) {
  app.use(bodyParser.json({
    limit: '50mb',
    strict: true,
  }));

  // parses the url encoded strings
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
  }));

  app.use(cookieParser());
  app.use(morgan(':method :status :url :res[content-length] - :response-time ms', { stream: logger.stream }));
  app.use(cors());
  // all security stuff
  app.use(helmet());
  app.use(passport.initialize());
  app.use(passport.session());

  // no cache
  app.use(nocache());
  app.use(frameguard({ action: 'sameorigin' }));

  // INCLUDE RATE LIMITING, REDIS CLIENT REQUIRED
  // const applyRateLimitFlag = config.get('APPLY_RATE_LIMIT');
  // if (applyRateLimitFlag === 'yes') {
  //   app.use(rateLimiterMiddleware);
  // }
}

module.exports = basic;
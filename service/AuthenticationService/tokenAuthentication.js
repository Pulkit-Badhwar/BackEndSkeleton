const jwt = require('jsonwebtoken');
const Boom = require('boom');
const config = require('nconf');
const inActiveUserTracker = require('../userTrackerService/inActiveUserTracker');

function getRedisVal(key) {
  return new Promise((resolve, reject) => {
    redis.get(key, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

async function redisDel(token) {
  redis.del([token], (err, response) => {
    if (response) {
      logger.info('redisDel :: Deleted Successfully');
    } else {
      logger.error('redisDel :: Cannot be deleted');
    }
  });
}

function tokenAuthentication(router) {
  router.use((req, res, next) => {
    const token = req.get('X-ACCESS-TOKEN');
    if (!token) return next(Boom.unauthorized('Token header is required'));
    jwt.verify(token, config.get('JWT_SECRET'), async (err, decoded) => { // eslint-disable-line
      if (err) {
        if (err.name === 'TokenExpiredError') {
          // return next(Boom.proxyAuthRequired(err.name));
          logger.info('TokenAuthentication :: Token expired');
          redisDel(token);
          await inActiveUserTracker(token);
          return next(Boom.proxyAuthRequired(err.name));
        }
        logger.error(`TokenAuthentication :: TokenAuthenticationError:  ${err}`);
        return next(err);
      }
      logger.info('JWT Verified');
      const user = await getRedisVal(token);
      if (!user) {
        return next(Boom.unauthorized('Invalid Authorization Token'));
      }
      req.user = JSON.parse(user);
      next();
    });
  });
}

module.exports = tokenAuthentication;
// NEED REDIS CLIENT FOR RATE LIMIT IMPLEMENTATION
const { RateLimiterRedis } = require('rate-limiter-flexible');

const { redisClient } = redis;

const REQUEST_LIMIT = 10;
const TIME_PERIOD_SECONDS = 1;

const rateLimiterRedis = new RateLimiterRedis({
  storeClient: redisClient,
  points: REQUEST_LIMIT,
  duration: TIME_PERIOD_SECONDS,
});

function rateLimiterMiddleware(req, res, next) {
  rateLimiterRedis.consume(req.ip)
    .then(() => {
      next();
    }).catch(() => {
      res.status(429).send('Too Many Requests');
    });
}

module.exports = rateLimiterMiddleware;
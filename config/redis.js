const redisLib = require('redis');
const nconf = require('nconf');
const logger = require('./logger');

nconf.env();
const redisHost = nconf.get('REDIS_HOST');
const redisPort = nconf.get('REDIS_PORT');

logger.info(`HOST : ${redisHost} :: PORT : ${redisPort}`);

const redis = redisLib.createClient(redisPort, redisHost);

redis.on('connect', () => {
  logger.info('redis connected');
}).on('error', (error) => {
  logger.error(error);
});

module.exports = {
  redis,
};

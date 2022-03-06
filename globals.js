const path = require('path');
const logger = require('./config/logger');
const { redis } = require('./config/redis');

global.rootRequire = (name) => {
  const module = require(path.join(__dirname, name)); // eslint-disable-line
  return module;
};

global.logger = logger;
global.redis = redis;

const router = require('express').Router();

require('./test')(router);
require('./manageAuth')(router);
require('./clientTracker')(router);
require('./impactUser')(router);

module.exports = (app) => {
  app.use('/api', router);
};


const router = require('express').Router();

require('./test')(router);
require('./clientUser')(router);
require('./manageAuth')(router);
require('./clientTracker')(router);
require('./archiveReport')(router);
require('./clientSubscription')(router);

module.exports = (app) => {
  app.use('/api', router);
};


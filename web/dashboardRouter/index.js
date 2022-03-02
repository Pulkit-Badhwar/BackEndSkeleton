const router = require('express').Router();

require('./manageAuth')(router);
require('./clientTracker')(router);
require('./company')(router);
require('./buisness')(router);
require('./organization')(router);
require('./funding')(router);
require('./product')(router);
require('./fileUpload')(router);
require('./finance')(router);
require('./impact')(router);
require('./module0')(router);
require('./resources/imageUpload')(router);

module.exports = (app) => {
  app.use('/api', router);
};


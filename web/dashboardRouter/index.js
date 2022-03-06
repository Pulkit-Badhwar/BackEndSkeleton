const router = require('express').Router();

require('./manageAuth')(router);
require('./profile/company')(router);
require('./profile/buisness')(router);
require('./profile/organization')(router);
require('./profile/funding')(router);
require('./profile/product')(router);
require('./profile/fileUpload')(router);
require('./profile/finance')(router);
require('./profile/impact')(router);
require('./module0')(router);
require('./resources')(router);

module.exports = (app) => {
  app.use('/api', router);
};


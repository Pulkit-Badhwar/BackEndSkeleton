const router = require('express').Router();

require('./manageAuth')(router);
require('./test')(router);


module.exports = (app) => {
  app.use('/api', router);
};


const router = require('express').Router();

require('./test')(router);
require('./authentication')(router);

module.exports = (app) => {
  app.use('/auth', router);
};
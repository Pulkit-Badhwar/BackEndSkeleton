const router = require('express').Router();

require('./SignUp')(router);
require('./authentication')(router);

module.exports = (app) => {
  app.use('/auth', router);
};
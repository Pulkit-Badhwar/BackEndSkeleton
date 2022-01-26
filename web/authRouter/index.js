const router = require('express').Router();

require('./SignUp')(router);
require('./authentication')(router);
require('./emailVerify')(router);
require('./fetchByEmail')(router);
require('./forgotPassword')(router);

module.exports = (app) => {
  app.use('/auth', router);
};
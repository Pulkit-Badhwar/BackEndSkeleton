const router = require('express').Router();

require('./SignUp')(router);
require('./authentication')(router);
require('./fetchByEmail')(router);
require('./forgotPassword')(router);
require('./forgotUsername')(router);
require('./linkedInLogin')(router);

module.exports = (app) => {
  app.use('/auth', router);
};
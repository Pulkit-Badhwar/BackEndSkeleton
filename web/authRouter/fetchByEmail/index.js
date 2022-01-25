const fetchUserByEmailHandler = require('./fetchUserByEmailHandler');

module.exports = (router) => {
  router.get('/impact/fetchByEmail', fetchUserByEmailHandler);
};
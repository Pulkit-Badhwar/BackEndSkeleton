const fetchUserHandler = require('./fetchUserHandler');
const fetchUserByEmailHandler = require('./fetchUserByEmailHandler');


module.exports = (router) => {
  router.get('/impact/all', fetchUserHandler);
  router.get('/impact/findByEmail', fetchUserByEmailHandler);
};
const fetchUserHandler = require('./fetchUserHandler');


module.exports = (router) => {
  router.get('/impact/all', fetchUserHandler);
};
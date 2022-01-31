const fetchUserHandler = require('./fetchUserHandler');


module.exports = (router) => {
  router.get('/impact/fetchAll', fetchUserHandler);
};
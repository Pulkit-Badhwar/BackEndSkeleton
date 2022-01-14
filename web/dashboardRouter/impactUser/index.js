const fetchUserHandler = require('./fetchUserHandler');
const createUserHandler = require('./createUserHandler');


module.exports = (router) => {
  router.get('/impact/all', fetchUserHandler);
  router.post('/impact/create', createUserHandler);
};
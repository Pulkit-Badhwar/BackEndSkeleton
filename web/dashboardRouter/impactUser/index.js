const fetchUserHandler = require('./fetchUserHandler');
const fetchUserByEmailHandler = require('./fetchUserByEmailHandler');
const createUserHandler = require('./createUserHandler');



module.exports = (router) => {
  router.get('/impact/all', fetchUserHandler);
  router.post('/impact/create', createUserHandler);
  router.get('/impact/findByEmail', fetchUserByEmailHandler);
};
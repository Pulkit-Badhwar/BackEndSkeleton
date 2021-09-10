const fetchAllClientUsersHandler = require('./fetchAllClientUsersHandler');
const getClientUserByEmailHandler = require('./getClientUserByEmailHandler');
const updateClientUserHandler = require('./updateClientUserHandler');
const editClientPasswordHandler = require('./editClientPasswordHandler')

module.exports = (router) => {
  router.get('/clientUser/all', fetchAllClientUsersHandler);
  router.get('/clientUser/get', getClientUserByEmailHandler);
  router.post('/clientUser/update', updateClientUserHandler);
  router.post('/clientUser/editPassword', editClientPasswordHandler);
};

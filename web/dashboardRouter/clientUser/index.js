const fetchAllClientUsersHandler = require('./fetchAllClientUsersHandler');
const getClientUserByEmailHandler = require('./getClientUserByEmailHandler');

module.exports = (router) => {
  router.get('/clientUser/all', fetchAllClientUsersHandler);
  router.get('/clientUser/get', getClientUserByEmailHandler);
};

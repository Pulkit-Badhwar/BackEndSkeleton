const createTokenHandler= require('./createTokenHandler');
const createUserTokenHandler = require('./createUserTokenHandler');
const fetchTokenByEmailHandler = require('./fetchTokenByEmailHandler');


module.exports = (router) => {
  router.post('/token/create',createTokenHandler);
  router.post('/token/createUser', createUserTokenHandler);
  router.get('/token/fetchByEmail', fetchTokenByEmailHandler);
};
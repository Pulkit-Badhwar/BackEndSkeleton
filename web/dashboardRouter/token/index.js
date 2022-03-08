const createTokenHandler= require('./createTokenHandler');
const fetchTokenByEmailHandler = require('./fetchTokenByEmailHandler');


module.exports = (router) => {
  router.post('/token/create',createTokenHandler);
  router.get('/token/fetchByEmail', fetchTokenByEmailHandler);
};
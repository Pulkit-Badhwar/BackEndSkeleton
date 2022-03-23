const createTokenHandler= require('./createTokenHandler');
const createUserTokenHandler = require('./createUserTokenHandler');
const fetchTokenByEmailHandler = require('./fetchTokenByEmailHandler');
const fetchPartnerByTokenHandler = require('./fetchPartnerByTokenHandler');


module.exports = (router) => {
  router.post('/token/create',createTokenHandler);
  router.post('/token/createUser', createUserTokenHandler);
  router.get('/token/fetchByEmail', fetchTokenByEmailHandler);
  router.get('/token/fetchPartner', fetchPartnerByTokenHandler);
};
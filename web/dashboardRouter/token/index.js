const createTokenHandler= require('./createTokenHandler');


module.exports = (router) => {
  router.post('/token/create',createTokenHandler)
};
const createFundingHandler = require('./createFundingHandler')


module.exports = (router) => {
  router.post('/funding/create', createFundingHandler);
};
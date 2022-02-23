const createFundingHandler = require('./createFundingHandler');
const fetchFundingByEmailHandler = require('./fetchFundingByEmailHandler');


module.exports = (router) => {
  router.post('/funding/create', createFundingHandler);
  router.get('/funding/fetchByEmail', fetchFundingByEmailHandler);
};
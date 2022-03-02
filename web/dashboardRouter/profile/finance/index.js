const createFinanceHandler = require('./createFinanceHandler');
const fetchFinanceByEmailHandler= require('./fetchFinanceByEmailHandler');


module.exports = (router) => {
  router.post('/finance/create', createFinanceHandler);
  router.get('/finance/fetchByEmail', fetchFinanceByEmailHandler);
};
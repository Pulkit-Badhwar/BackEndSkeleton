const createCompanyHandler = require('./createCompanyHandler');
const fetchCompanyByEmailHandler = require('./fetchCompanyByEmailHandler');


module.exports = (router) => {
  router.post('/company/create', createCompanyHandler);
  router.get('/company/fetchByEmail', fetchCompanyByEmailHandler);
};
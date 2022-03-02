const createCompanyHandler = require('./createCompanyHandler');
const fetchCompanyByEmailHandler = require('./fetchCompanyByEmailHandler');
const updateCompanyByEmailHandler = require('./updateCompanyByEmailHandler');


module.exports = (router) => {
  router.post('/company/create', createCompanyHandler);
  router.get('/company/fetchByEmail', fetchCompanyByEmailHandler);
  router.post('/company/updateDesc', updateCompanyByEmailHandler);
};
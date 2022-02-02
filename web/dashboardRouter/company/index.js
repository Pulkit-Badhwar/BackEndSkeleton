const createCompanyHandler = require('./createCompanyHandler')


module.exports = (router) => {
  router.post('/company/create', createCompanyHandler);
};
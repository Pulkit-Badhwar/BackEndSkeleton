const createOrganizationHandler = require('./createOrganizationHandler')


module.exports = (router) => {
  router.post('/organization/create', createOrganizationHandler);
};
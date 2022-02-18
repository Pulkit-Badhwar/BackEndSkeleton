const createOrganisationHandler = require('./createOrganisationHandler');
const fetchOrganisationByEmailHandler = require('./fetchOrganisationByEmailHandler');


module.exports = (router) => {
  router.post('/organisation/create', createOrganisationHandler);
  router.get('/organisation/fetchByEmail', fetchOrganisationByEmailHandler);
};
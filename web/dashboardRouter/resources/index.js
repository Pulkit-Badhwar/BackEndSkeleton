const createResourcesHandler = require('./createResourcesHandler');
const fetchAllResourcesHandler = require('./fetchAllResourcesHandler');
const fetchResourcesByEmailHandler = require('./fetchResourcesByEmailHandler');


module.exports = (router) => {
  router.post('/resources/create',createResourcesHandler)
  router.get('/resources/fetchByEmail', fetchResourcesByEmailHandler);
  router.get('/resources/fetchAll', fetchAllResourcesHandler);
};
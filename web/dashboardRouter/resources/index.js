const createResourcesHandler = require('./createResourcesHandler');
const fetchAllResourcesHandler = require('./fetchAllResourcesHandler');
const fetchResourcesByEmailHandler = require('./fetchResourcesByEmailHandler');
const fetchResourcesImage = require('./fetchResourcesImage');


module.exports = (router) => {
  router.post('/resources/create',createResourcesHandler)
  router.get('/resources/fetchByEmail', fetchResourcesByEmailHandler);
  router.get('/resources/fetchAll', fetchAllResourcesHandler);
  router.get('/resources/fetchImage', fetchResourcesImage);
};
const createResourcesHandler = require('./createResourcesHandler');
const fetchResourcesByEmailHandler = require('./fetchResourcesByEmailHandler');


module.exports = (router) => {
  router.post('/resources/create',createResourcesHandler)
  router.get('/resources/fetchByEmail', fetchResourcesByEmailHandler)
};
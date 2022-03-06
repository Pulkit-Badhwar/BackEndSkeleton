const createResourcesHandler = require('./createResourcesHandler');


module.exports = (router) => {
  router.post('/resources/create',createResourcesHandler)
};
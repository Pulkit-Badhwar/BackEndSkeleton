const createLibraryHandler = require('./createLibraryHandler');
const fetchAllResourcesHandler = require('./fetchAllResourcesHandler');
const fetchLibraryByEmailHandler = require('./fetchLibraryByEmailHandler');
const fetchResourcesImage = require('./fetchResourcesImage');
const fetchAllImages = require('./fetchAllImages');
const fetchFileByTopic = require('./fetchFileByTopic');


module.exports = (router) => {
  router.post('/resources/createLib',createLibraryHandler)
  router.get('/resources/fetchLib', fetchLibraryByEmailHandler);
  router.get('/resources/fetchAll', fetchAllResourcesHandler);
  router.get('/resources/fetchImage', fetchResourcesImage);
  router.get('/resources/fetchRow', fetchAllImages);
  router.get('/resources/fetchFile', fetchFileByTopic);
};
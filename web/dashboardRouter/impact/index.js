const createImpactHandler = require('./createImpactHandler');
const fetchImpactByEmailHandler = require('./fetchImpactByEmailHandler');


module.exports = (router) => {
  router.post('/impact/create', createImpactHandler);
  router.get('/impact/fetchByEmail', fetchImpactByEmailHandler);
};
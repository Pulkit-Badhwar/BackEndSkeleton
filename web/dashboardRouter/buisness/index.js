const createBuisnessHandler = require('./createBuisnessHandler');
const fetchBuisnessByEmailHandler = require('./fetchBuisnessByEmailHandler');


module.exports = (router) => {
  router.post('/buisness/create', createBuisnessHandler);
  router.get('/buisness/fetchByEmail', fetchBuisnessByEmailHandler);
};
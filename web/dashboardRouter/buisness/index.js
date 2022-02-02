const createBuisnessHandler = require('./createBuisnessHandler')


module.exports = (router) => {
  router.post('/buisness/create', createBuisnessHandler);
};
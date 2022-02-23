const createProductHandler = require('./createProductHandler');
const fetchProductByEmailHandler = require('./fetchProductByEmailHandler');


module.exports = (router) => {
  router.post('/product/create', createProductHandler);
  router.get('/product/fetchByEmail', fetchProductByEmailHandler);
};
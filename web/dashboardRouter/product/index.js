const createProductStageHandler = require('./createProductStageHandler')


module.exports = (router) => {
  router.post('/product/create', createProductStageHandler);
};
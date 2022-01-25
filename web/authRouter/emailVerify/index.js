const getCode = require('./getCode');

module.exports = (router) => {
  router.get(`/verify/:uniqueString`, getCode);
};
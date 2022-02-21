const forgotPassword = require('./forgotPassword');
const verifyCodeForPassword = require('./verifyCodeForPassword');
const updateByEmailHandler = require('./updateByEmailHandler');

module.exports = (router) => {
  router.post('/impact/forgot', forgotPassword);
  router.get(`/impact/verifyCodeForPassword/:uniqueString`, verifyCodeForPassword);
  router.post('/impact/updatePass', updateByEmailHandler);
};

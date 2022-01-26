const forgotPassword = require('./forgotPassword');
const newPassword = require('./newPassword');
const updateByEmailHandler = require('./updateByEmailHandler');

module.exports = (router) => {
  router.post('/impact/forgot', forgotPassword);
  router.get(`/forgot/:uniqueString`, newPassword);
  router.post('/impact/updatePass', updateByEmailHandler);
};

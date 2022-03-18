const linkedInLogin = require('./linkedInLogin');

module.exports = (router) => {
  router.post('/linkedIn/login', linkedInLogin);
};

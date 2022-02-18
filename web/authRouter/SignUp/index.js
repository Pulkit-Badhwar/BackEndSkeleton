const SignUp = require('./SignUp');
const resendEmail = require('./resendEmail');

module.exports = (router) => {
  router.post('/impact/SignUp', SignUp);
  router.post('/impact/resendEmail', resendEmail);
};
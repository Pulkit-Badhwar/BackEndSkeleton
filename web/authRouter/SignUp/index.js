const SignUp = require('./SignUp');
const resendEmail = require('./resendEmail');
const verifyCodeForEmail = require('./verifyCodeForEmail');

module.exports = (router) => {
  router.post('/someCompany/SignUp', SignUp);
  router.post('/someCompany/resendEmail', resendEmail);
  router.get(`/someCompany/verifyCodeForEmail/:uniqueString`, verifyCodeForEmail);
};
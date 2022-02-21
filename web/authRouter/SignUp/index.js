const SignUp = require('./SignUp');
const resendEmail = require('./resendEmail');
const fetchUserByUrl = require('./fetchUserByUrlHandler');
const fetchUserByUrlHandler = require('./fetchUserByUrlHandler');
const verifyCodeForEmail = require('./verifyCodeForEmail');

module.exports = (router) => {
  router.post('/impact/SignUp', SignUp);
  router.post('/impact/resendEmail', resendEmail);
  router.get('/impact/fetchUserByUrl', fetchUserByUrlHandler);
  router.get(`/impact/verifyCodeForEmail/:uniqueString`, verifyCodeForEmail);
};
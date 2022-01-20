const SignUp = require('./SignUp')

module.exports = (router) => {
  router.post('/impact/SignUp', SignUp);
};
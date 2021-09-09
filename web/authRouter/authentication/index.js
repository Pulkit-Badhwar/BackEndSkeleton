const { passport } = rootRequire('web/middleware');
const authenticateUser = require('./authenticateUser');

module.exports = (router) => {
  router.post('/authenticate', passport.authenticate('local', { session: false }), authenticateUser);
};
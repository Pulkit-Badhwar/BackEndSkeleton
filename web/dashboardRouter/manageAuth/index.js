const logoutUserHandler = require('./logoutUserHandler');

module.exports = (router) => {
    router.post('/logout', logoutUserHandler);
}
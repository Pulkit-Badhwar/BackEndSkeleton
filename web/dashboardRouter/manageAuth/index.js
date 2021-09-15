const logoutClientHandler = require('./logoutClientHandler');

module.exports = (router) => {
    router.post('/logout', logoutClientHandler);
}
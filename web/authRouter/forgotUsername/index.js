const forgotUsername = require('./forgotUsername');
const newUsername = require('./newUsername');
const updateByEmailHandler = require('./updateByEmailHandler');

module.exports = (router) => {
  router.post('/impact/forgotUsername', forgotUsername);
  router.get(`/forgotUsername/:uniqueString`, newUsername);
  router.post('/impact/updateUsername', updateByEmailHandler);
};

const fetchFolderWithSign = require('./fetchFolderWithSign');

module.exports = (router) => {
router.get('/fetchBySign', fetchFolderWithSign);
}
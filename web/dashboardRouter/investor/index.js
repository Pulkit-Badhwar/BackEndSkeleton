const fetchAllInvestorsHandler = require('./fetchAllInvestorsHandler');


module.exports = (router) => {
    router.get('/investors/fetchAll',fetchAllInvestorsHandler);
  };
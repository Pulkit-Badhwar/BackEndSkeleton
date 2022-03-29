const fetchAllInvestorsHandler = require('./fetchAllInvestorsHandler');
const updateInvestorStageHandler = require('./updateInvestorStageHandler');

module.exports = (router) => {
    router.get('/investors/fetchAll',fetchAllInvestorsHandler);
    router.post('/investors/updateStage', updateInvestorStageHandler);
  };
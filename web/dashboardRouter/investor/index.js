const fetchAllInvestorsHandler = require('./fetchAllInvestorsHandler');
const updateInvestorStageHandler = require('./updateInvestorStageHandler');
const saveCompanyHandler = require("./saveCompanyHandler");

module.exports = (router) => {
    router.get('/investors/fetchAll',fetchAllInvestorsHandler);
    router.post('/investors/updateStage', updateInvestorStageHandler);
    router.post("/investors/companyStage", saveCompanyHandler);
  };
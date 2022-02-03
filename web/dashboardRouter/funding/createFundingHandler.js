const { createFunding } = require('../../../service/fundingService');

async function handler(req) {
    try {
        const user = {
          CompanyID : req.body.answers[0].text,
          PreviousModules : req.body.answers[1].boolean,
          External_funding : req.body.answers[2].boolean,
          Funding_toDate : req.body.answers[3].number,
          FundingStage : req.body.answers[4].choice.label,
          LastFundingDate : req.body.answers[5].date,
          Pre_money_valuation : req.body.answers[6].number,
          Valuated_How : req.body.answers[7].choice.label,
          Valuation_Method : req.body.answers[8].text,
          Recomend_valuation_partner : req.body.answers[9].choice.label,
          RaisingAskUSD : req.body.answers[10].number,
          TypeOfFunding : req.body.answers[11].choice.label,
          Percentage_equity : req.body.answers[12].number,
          TypeOfShareEquity : req.body.answers[13].choice.label,
          UseOfFunds : req.body.answers[14].text,
          WantFromInvestor : req.body.answers[15].text,
          PitchDeckAvailable : req.body.answers[16].boolean,
          PitchDeckFileLocation : req.body.answers[17].text || null
        }
        const userData = await createFunding(user);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createFundingHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createFundingHandler;
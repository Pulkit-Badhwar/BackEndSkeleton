const { updateInvestorByID } = require('../../../service/investorService');

async function handler(req) {
  try {
    const user = {
        Stage : req.body.Stage,
        InvestorName : req.body.InvestorName,
    }
    const userData = await updateInvestorByID(user);
    return userData;
  } catch (err) {
    throw err;
  }
}

function updateStageHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = updateStageHandler;
const { fetchAllInvestors } = require('../../../service/investorService');

async function handler(req) {
  try {
    const userData = await fetchAllInvestors();
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchAllInvestorsHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchAllInvestorsHandler;
const { fetchFundingByEmail } = require('../../../../service/profileService/fundingService');

async function handler(req) {
  try {
    const email = req.query.email;
    const userData = await fetchFundingByEmail(email);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchFundingByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchFundingByEmailHandler;
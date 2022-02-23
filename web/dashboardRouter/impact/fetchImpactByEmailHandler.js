const { fetchImpactByEmail} = require('../../../service/impactService');

async function handler(req) {
  try {
    const email = req.query.email;
    const userData = await fetchImpactByEmail(email);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchFinanceByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchFinanceByEmailHandler;
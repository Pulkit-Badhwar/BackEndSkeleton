const { fetchPartnerByToken } = require('../.../../../../service/partnerService');

async function handler(req) {
  try {
    const token = req.query.token;
    const userData = await fetchPartnerByToken(token);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchPartnerByTokenHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchPartnerByTokenHandler;
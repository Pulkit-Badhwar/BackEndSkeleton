const { fetchBuisnessByEmail } = require('../../../service/buisnessService');

async function handler(req) {
  try {
    const email = req.query.email;
    const userData = await fetchBuisnessByEmail(email);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchBuisnessByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchBuisnessByEmailHandler;
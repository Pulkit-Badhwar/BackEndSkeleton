const { fetchTokenByEmail } = require('../.../../../../service/tokenService');

async function handler(req) {
  try {
    const email = req.query.email;
    const userData = await fetchTokenByEmail(email);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchTokenByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchTokenByEmailHandler;
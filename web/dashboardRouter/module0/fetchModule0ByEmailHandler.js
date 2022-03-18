const { fetchModule0ByEmail } = require('../../../service/module0Service');

async function handler(req) {
  try {
    const email = req.query.email;
    const userData = await fetchModule0ByEmail(email);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchModule0ByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchModule0ByEmailHandler;
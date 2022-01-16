const { fetchUserByEmail } = require('../../../service/impactUserService');

async function handler(req) {
  try {
    const userEmail = req.query.email;
    const userData = await fetchUserByEmail(userEmail);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchUserByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchUserByEmailHandler;
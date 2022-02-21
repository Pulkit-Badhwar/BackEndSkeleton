const { fetchUserByUrl } = require('../../../service/impactUserService');

async function handler(req) {
  try {
    const userUrl = req.query.Urll;
    const userData = await fetchUserByUrl(userEmail);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchUserByUrlHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchUserByUrlHandler;
const { fetchUser } = require('../../../service/impactUserService');

async function handler() {
  try {
    const userData = await fetchUser();
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchUserHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchUserHandler;
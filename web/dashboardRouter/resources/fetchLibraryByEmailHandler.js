const { fetchLibraryByEmail } = require('../../../service/resourceService');

async function handler(req) {
  try {
    const email = req.query.email;
    const userData = await fetchLibraryByEmail(email);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchLibraryByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchLibraryByEmailHandler;
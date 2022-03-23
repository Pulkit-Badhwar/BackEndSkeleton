const { fetchAllResources } = require('../../../service/resourceService');

async function handler(req) {
  try {
    const userData = await fetchAllResources();
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchAllResourcesHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchAllResourcesHandler;
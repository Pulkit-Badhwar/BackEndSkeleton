const { fetchClientSubscription } = rootRequire('service/clientSubscriptionService');

async function handler(req) {
  try {
    const data = await fetchClientSubscription(req.query.email);
    return data
  } catch (err) {
    throw err;
  }
}

function fetchClientSubscriptionHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchClientSubscriptionHandler;
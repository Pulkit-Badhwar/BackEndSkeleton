const { fetchClientSubscription } = rootRequire('service/clientSubscriptionService');

async function handler(req) {
  try {
    const email = req.query.email;
    const clientData = await fetchClientSubscription(email);
    return clientData;
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
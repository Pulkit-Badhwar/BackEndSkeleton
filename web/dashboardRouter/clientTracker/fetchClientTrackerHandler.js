const { fetchClientTracker } = rootRequire('service/clientTrackerService');

async function handler() {
  const clientData = await fetchClientTracker();
  return clientData;
}

function fetchClientTrackerHandler(req, res, next) {
  handler().then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchClientTrackerHandler;
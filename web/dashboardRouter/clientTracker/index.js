const fetchClientTrackerHandler = require('./fetchClientTrackerHandler');
const findClientTrackerHandler = require('./findClientTrackerHandler');

module.exports = (router) => {
  router.get('/clientTracker/getAll', fetchClientTrackerHandler);
  router.get('/clientTracker/get', findClientTrackerHandler);
};

const updateClientTracker = require('./updateClientTracker');

async function inActiveClientTracker(clientToken) {
  const updateObj = {
    status: 'inactive',
  };
  const result = await updateClientTracker(updateObj, clientToken);
  return result;
}

module.exports = inActiveClientTracker;
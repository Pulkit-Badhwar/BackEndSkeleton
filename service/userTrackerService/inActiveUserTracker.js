const updateUserTracker = require("./updateUserTracker");

async function inActiveUserTracker(userToken) {
  const updateObj = {
    status: 'inactive',
  };
  const result = await updateUserTracker(updateObj, userToken);
  return result;
}

module.exports = inActiveUserTracker;
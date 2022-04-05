const { updateByToken } = require('../../repo/posgresSQL/userTrackerRepo')

async function updateUserTracker(updateObject, userToken) {
  try {
    const data = await updateByToken(updateObject, userToken);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateUserTracker;
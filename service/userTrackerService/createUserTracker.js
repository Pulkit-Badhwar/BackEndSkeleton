/* eslint-disable no-useless-catch */
const { save } = require('../../repo/posgresSQL/userTrackerRepo')

async function createUserTracker(userObj) {
  try {
    const data = await save(userObj);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createUserTracker;

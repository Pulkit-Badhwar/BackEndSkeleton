/* eslint-disable no-useless-catch */
const { save } = require('../../repo/posgresSQL/clientTrackerRepo')

async function createClientTracker(clientObj) {
  try {
    const data = await save(clientObj);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createClientTracker;

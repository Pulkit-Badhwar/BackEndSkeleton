/* eslint-disable no-useless-catch */
const { find } = rootRequire('repo/mysql/clientTrackerRepo');

async function fetchClientTracker() {
  try {
    const data = await find();
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchClientTracker;
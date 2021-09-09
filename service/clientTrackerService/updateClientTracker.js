/* eslint-disable no-useless-catch */
const { updateByToken } = rootRequire('repo/mysql/clientTrackerRepo');

async function updateClientTracker(updateObject, clientToken) {
  try {
    const data = await updateByToken(updateObject, clientToken);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateClientTracker;
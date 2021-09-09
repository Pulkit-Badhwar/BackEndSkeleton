/* eslint-disable no-useless-catch */
const { findByEmail } = rootRequire('repo/mysql/clientTrackerRepo');

async function findClientTracker(clientEmail) {
  try {
    const data = await findByEmail(clientEmail);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = findClientTracker;

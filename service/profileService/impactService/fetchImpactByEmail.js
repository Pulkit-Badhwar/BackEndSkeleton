const { fetchByEmail } = require('../../../repo/posgresSQL/profileRepo/impactRepo');

async function fetchImpactByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchImpactByEmail;
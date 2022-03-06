const { fetchByEmail } = require('../../../repo/posgresSQL/profileRepo/fundingRepo');

async function fetchFundingByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchFundingByEmail;
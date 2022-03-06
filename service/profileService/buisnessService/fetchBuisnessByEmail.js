const { fetchByEmail } = require('../../../repo/posgresSQL/profileRepo/buisnessRepo');

async function fetchBuisnessByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchBuisnessByEmail;
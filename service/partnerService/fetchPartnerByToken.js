const { fetchByToken } = require('../../repo/posgresSQL/partnerRepo/partnerRepo')

async function fetchPartnerByToken(token) {
  try {
    const data = await fetchByToken(token);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchPartnerByToken;
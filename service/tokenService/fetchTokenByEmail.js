const { fetchByEmail } = require('../../repo/posgresSQL/tokenRepo/tokenRepo');

async function fetchTokenByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchTokenByEmail;
const { updateByEmail } = require('../../repo/posgresSQL/tokenRepo/tokenRepo');

async function updateTokenByEmail(user) {
  try {
    const data = await updateByEmail(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateTokenByEmail;
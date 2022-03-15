const { saveUser } = require('../../repo/posgresSQL/tokenRepo/tokenRepo');

async function createUserToken(user, email) {
  try {
    const data = await saveUser(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createUserToken;
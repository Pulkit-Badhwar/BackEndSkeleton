const { saveUser } = require('../../repo/posgresSQL/tokenRepo/tokenRepo');

async function createUserToken(user) {
  try {
    const data = await saveUser(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createUserToken;
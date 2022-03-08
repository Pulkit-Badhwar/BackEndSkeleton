const { save } = require('../../repo/posgresSQL/tokenRepo/tokenRepo');

async function createToken(user, email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createToken;
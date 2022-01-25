const { findByCode } = require('../../repo/posgresSQL/userRepo');

async function fetchUserByCode(code) {

  try {
    const data = await findByCode(code);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchUserByCode;
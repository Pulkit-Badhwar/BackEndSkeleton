const { findByUrl } = require('../../repo/posgresSQL/userRepo');

async function fetchUserByUrl(code) {

  try {
    const data = await findByUrl(code);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchUserByUrl;
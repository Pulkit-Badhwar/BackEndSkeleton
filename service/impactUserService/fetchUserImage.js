const { findByEmail } = require('../../repo/posgresSQL/userRepo/userImageRepo');

async function fetchUserImage(email) {

  try {
    const data = await findByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchUserImage;
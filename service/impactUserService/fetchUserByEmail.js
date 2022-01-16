const { findByEmail } = require('../../repo/posgresSQL/userRepo')

async function fetchUserByEmail(userEmail) {
  try {
    const data = await findByEmail(userEmail);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchUserByEmail;
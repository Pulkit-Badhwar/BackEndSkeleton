const { updateByEmail } = require('../../repo/posgresSQL/userRepo');

async function updateUserByEmail(user) {
  try {
    const data = await updateByEmail(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateUserByEmail;
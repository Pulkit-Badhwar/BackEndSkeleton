const { updateEmail } = require('../../repo/posgresSQL/userRepo');

async function updateByEmail(user) {
  try {
    const data = await updateEmail(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateByEmail;
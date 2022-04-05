const { updateByCode } = require('../../repo/posgresSQL/userRepo');

async function updateUserByCode(user) {
  try {
    const data = await updateByCode(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateUserByCode;
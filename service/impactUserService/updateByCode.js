const { update } = require('../../repo/posgresSQL/userRepo');

async function updateByCode(user) {
  try {
    const data = await update(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateByCode;
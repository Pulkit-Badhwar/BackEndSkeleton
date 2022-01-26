const { updateCode } = require('../../repo/posgresSQL/userRepo');

async function updateByCode(user) {
  try {
    const data = await updateCode(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateByCode;
const { save } = require('../../repo/posgresSQL/userRepo/userImageRepo');

async function saveUserImage(user) {
  try {
    const data = await save(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = saveUserImage;
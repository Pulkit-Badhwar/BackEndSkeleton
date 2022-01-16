const { find } = require('../../repo/posgresSQL/userRepo');

async function fetchUser() {
  try {
    const data = await find();
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchUser;
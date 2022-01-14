const { save } = require('../../repo/posgresSQL/queries');

async function createUser(user) {
  try {
    const data = await save(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createUser;
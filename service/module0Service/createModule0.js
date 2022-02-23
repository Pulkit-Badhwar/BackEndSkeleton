const { save } = require('../../repo/posgresSQL/module0Repo');

async function createModule0(user,email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createModule0;
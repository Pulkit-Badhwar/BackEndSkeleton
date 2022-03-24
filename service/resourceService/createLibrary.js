const { save } = require('../../repo/posgresSQL/resourcesRepo/resourceRepo');

async function createLibrary(user, email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createLibrary;
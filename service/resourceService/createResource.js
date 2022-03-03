const { save } = require('../../repo/posgresSQL/resourceRepo');

async function createResource(user, email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createResource;
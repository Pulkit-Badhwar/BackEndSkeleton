const { save } = require('../../../repo/posgresSQL/buisnessRepo');

async function createBuisness(user, email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createBuisness;
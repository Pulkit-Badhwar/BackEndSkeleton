const { save } = require('../../repo/posgresSQL/buisnessRepo');

async function createBuisness(user) {
  try {
    const data = await save(user, CompanyID);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createBuisness;
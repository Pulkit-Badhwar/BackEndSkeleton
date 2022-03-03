const { save } = require('../../../repo/posgresSQL/fundingRepo');

async function createFunding(user, email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createFunding;
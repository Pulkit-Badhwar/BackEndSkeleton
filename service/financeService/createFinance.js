const { save } = require('../../repo/posgresSQL/financeRepo');

async function createFinance(user,email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createFinance;
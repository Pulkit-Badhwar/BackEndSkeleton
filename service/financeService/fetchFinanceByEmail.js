const { fetchByEmail } = require('../../repo/posgresSQL/financeRepo');

async function fetchFinanceByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchFinanceByEmail;
const { fetchAll } = require('../../repo/posgresSQL/investorRepo/investorRepo')

async function fetchAllInvestors() {
  try {
    const data = await fetchAll();
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchAllInvestors;
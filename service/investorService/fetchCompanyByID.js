const { findByID } = require('../../repo/posgresSQL/investorRepo/investorRepo')

async function fetchCompanyByID(user) {
  try {
    const data = await findByID(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchCompanyByID;
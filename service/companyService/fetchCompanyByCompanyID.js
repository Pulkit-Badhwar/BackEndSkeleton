const { fetchByCompanyID } = require('../../repo/posgresSQL/companyRepo');

async function fetchCompanyByCompanyID(email) {
  try {
    const data = await fetchByCompanyID(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchCompanyByCompanyID;
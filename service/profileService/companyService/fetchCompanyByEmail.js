const { fetchByEmail } = require('../../../repo/posgresSQL/profileRepo/companyRepo');

async function fetchCompanyByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchCompanyByEmail;
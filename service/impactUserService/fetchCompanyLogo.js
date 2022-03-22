const { findByEmail } = require('../../repo/posgresSQL/userRepo/companyLogoRepo');

async function fetchCompanyLogo(email) {

  try {
    const data = await findByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchCompanyLogo;
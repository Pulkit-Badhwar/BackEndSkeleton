const { findByEmail } = require('../../repo/posgresSQL/userRepo/companyImageRepo');

async function fetchCompanyImage(email) {

  try {
    const data = await findByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchCompanyImage;
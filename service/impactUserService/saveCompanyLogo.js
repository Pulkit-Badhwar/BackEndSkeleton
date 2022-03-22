const { save } = require('../../repo/posgresSQL/userRepo/companyLogoRepo');

async function saveCompanyLogo(user) {
  try {
    const data = await save(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = saveCompanyLogo;
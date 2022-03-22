const { save } = require('../../repo/posgresSQL/userRepo/companyImageRepo');

async function saveCompanyImage(user) {
  try {
    const data = await save(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = saveCompanyImage;
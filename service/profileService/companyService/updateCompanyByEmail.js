const { updateByEmail } = require('../../../repo/posgresSQL/profileRepo/companyRepo');

async function updateCompanyByEmail(user) {
  try {
    const data = await updateByEmail(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateCompanyByEmail;
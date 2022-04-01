const { update } = require('../../repo/posgresSQL/investorRepo/investorRepo')

async function updateCompanyByID(user) {
  try {
    const data = await update(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateCompanyByID;
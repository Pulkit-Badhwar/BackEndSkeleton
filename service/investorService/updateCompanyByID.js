const { updateByID } = require('../../repo/posgresSQL/investorRepo/investorRepo')

async function updateCompanyByID(user) {
  try {
    const data = await updateByID(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateCompanyByID;
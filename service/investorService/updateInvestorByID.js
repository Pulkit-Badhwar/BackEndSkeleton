const { updateByID } = require('../../repo/posgresSQL/investorRepo/investorRepo')

async function updateInvestorByID(user) {
  try {
    const data = await updateByID(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateInvestorByID;
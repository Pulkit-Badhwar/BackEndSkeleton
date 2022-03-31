const { save } = require('../../repo/posgresSQL/investorRepo/investorRepo')

async function saveCompany(user) {
  try {
    const data = await save(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = saveCompany;
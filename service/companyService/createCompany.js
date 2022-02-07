const { save } = require('../../repo/posgresSQL/companyRepo');

async function createCompany(user) {
  try {
    const data = await save(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createCompany;
const { save } = require('../../repo/posgresSQL/companyRepo');

async function createCompany(user, email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createCompany;
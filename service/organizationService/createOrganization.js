const { save } = require('../../repo/posgresSQL/companyRepo');

async function createOrganization(user) {
  try {
    const data = 1
    console.log(user);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createOrganization;
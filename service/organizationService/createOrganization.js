const { save } = require('../../repo/posgresSQL/organisationRepo');

async function createOrganization(user, email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createOrganization;
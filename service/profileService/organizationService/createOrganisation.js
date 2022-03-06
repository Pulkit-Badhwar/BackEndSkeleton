const { save } = require('../../../repo/posgresSQL/profileRepo/organisationRepo');

async function createOrganisation(user, email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createOrganisation;
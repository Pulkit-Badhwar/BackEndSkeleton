const { fetchByEmail } = require('../../../repo/posgresSQL/profileRepo/organisationRepo');

async function fetchOrganisationByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchOrganisationByEmail;
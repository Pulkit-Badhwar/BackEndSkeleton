const { fetchByEmail } = require('../../repo/posgresSQL/resourcesRepo/resourceRepo')

async function fetchResourcesByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchResourcesByEmail;
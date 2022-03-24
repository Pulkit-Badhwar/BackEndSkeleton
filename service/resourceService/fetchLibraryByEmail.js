const { fetchByEmail } = require('../../repo/posgresSQL/resourcesRepo/resourceRepo')

async function fetchLibraryByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchLibraryByEmail;
const { fetchAll } = require('../../repo/posgresSQL/resourcesRepo/resourceRepo')

async function fetchAllResources() {
  try {
    const data = await fetchAll();
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchAllResources;
const { fetchByTopic } = require('../../repo/posgresSQL/resourcesRepo/resourceRepo')

async function fetchResourcesByTopic(topic) {
  try {
    const data = await fetchByTopic(topic);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchResourcesByTopic;
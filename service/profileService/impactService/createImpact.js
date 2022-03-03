const { save } = require('../../../repo/posgresSQL/impactRepo');

async function createImpact(user,email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createImpact;
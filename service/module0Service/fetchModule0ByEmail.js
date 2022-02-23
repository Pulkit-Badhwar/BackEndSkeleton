const { fetchByEmail } = require('../../repo/posgresSQL/module0Repo');

async function fetchModule0ByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchModule0ByEmail;
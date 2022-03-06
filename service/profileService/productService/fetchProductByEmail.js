const { fetchByEmail } = require('../../../repo/posgresSQL/profileRepo/productRepo');

async function fetchProductByEmail(email) {
  try {
    const data = await fetchByEmail(email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchProductByEmail;
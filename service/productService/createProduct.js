const { save } = require('../../repo/posgresSQL/productRepo');

async function createProduct(user,email) {
  try {
    const data = await save(user, email);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createProduct;
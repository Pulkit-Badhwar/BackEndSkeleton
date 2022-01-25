const { findByEmail } = require('../../repo/posgresSQL/userRepo');
const crypto = require("crypto");
const { decrypt } = require('../../service/crypto/crypto')

async function fetchUserByEmail(userEmail) {

  try {
    const data = await findByEmail(userEmail);

    const decrypted = decrypt(data.password);
    data.password = decrypted;
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchUserByEmail;
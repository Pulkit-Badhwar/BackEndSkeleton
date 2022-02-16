const { findByEmail } = require('../../repo/posgresSQL/userRepo');
const crypto = require("crypto");
const { decrypt } = require('../../service/crypto/crypto')
const Boom = require('boom');

async function fetchUserByEmail(userEmail) {

  try {
    const data = await findByEmail(userEmail);
    if(data == undefined){
      throw Boom.badRequest('Couldn’t find a Impact Rooms account associated with this email. Please try again');
    }
    const decrypted = decrypt(data.password);
    data.password = decrypted;
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchUserByEmail;
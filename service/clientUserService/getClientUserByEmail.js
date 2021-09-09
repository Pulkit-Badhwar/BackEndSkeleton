/* eslint-disable no-useless-catch */
const { findByEmail } = rootRequire('repo/mysql/clientUserRepo');

async function getClientUserByEmail(clientEmail) {
  try {
    const data = await findByEmail(clientEmail);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = getClientUserByEmail;

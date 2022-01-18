/* eslint-disable no-useless-catch */
const Boom = require('boom');

const { fetchUserByEmail } = require('../impactUserService')
const { generateToken } = rootRequire('utils/TokenManagerUtils');

async function authorizeClientUser(email, password) {
  try {
    logger.info(`authorizeAdminUser :: Email : ${email} :: password : ${password}`);
    const user = await fetchUserByEmail(email);
    if (user.password === password) {
      const token = generateToken(email);
      return { user, token };
    }
    throw new Boom('Incorrect Password');
  } catch (err) {
    throw err;
  }
}

module.exports = authorizeClientUser;
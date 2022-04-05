/* eslint-disable no-useless-catch */
const Boom = require('boom');

const { fetchUserByEmail } = require('../userService');
const { generateToken } = require('../../utils/TokenManagerUtils');

async function authorizeUser(email, password) {
  try {
    logger.info(`authorizeAdminUser :: Email : ${email} :: password : ${password}`);
    const user = await fetchUserByEmail(email);
    if (user.password === password) {
      const token = generateToken(email);
      return { user, token };
    }
    throw new Boom("That's not the right password. Try again");
  } catch (err) {
    throw err;
  }
}

module.exports = authorizeUser;
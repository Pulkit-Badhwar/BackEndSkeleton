/* eslint-disable no-useless-catch */
const Boom = require('boom');

const { getClientUserByEmail } = require('../impactUserService')
const { generateToken } = rootRequire('utils/TokenManagerUtils');

async function authorizeClientUser(email, password) {
  try {
    logger.info(`authorizeAdminUser :: Email : ${email} :: password : ${password}`);
    const userArr = await getClientUserByEmail(email);
    logger.info(`UserArr : ${JSON.stringify(userArr)}`);
    if (!userArr.length) throw new Boom('User Does not exist');

    const user = userArr[0];
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
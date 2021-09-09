const jwt = require('jsonwebtoken');
const config = require('nconf');

function generateToken(email) {
  const payloads = { email };
  const token = jwt.sign(payloads, config.get('JWT_SECRET'), { expiresIn: parseInt(config.get('JWT_TOKEN_TIME'), 10) });
  return token;
}

module.exports = {
  generateToken,
}
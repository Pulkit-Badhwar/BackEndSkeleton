/* eslint-disable no-useless-catch */
const { createUser } = require('../../../service/impactUserService');
const { isCharactersString, isEmailString, isPasswordString } = require('../../../service/validate/regexValidate');
const crypto = require("crypto");



async function handler(req) {

  if (isCharactersString(req.body.name) && isEmailString(req.body.email) && isPasswordString(req.body.password)) {
    const algorithm = "aes-256-cbc";
    const initVector = crypto.randomBytes(16);
    const message = req.body.password;
    const Securitykey = crypto.randomBytes(32);
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

    let encryptedData = cipher.update(message, "utf-8", "hex");
    encryptedData += cipher.final("hex");

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: encryptedData,
    };


    const result = await createUser(user);
    return result;
  }
  else {
    console.log('Data Invalid')
  }
}

function createUserHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = createUserHandler;

/* eslint-disable no-useless-catch */
const { createUser } = require('../../../service/impactUserService');
const crypto = require("crypto");



async function handler(req) {

  const algorithm = "aes-256-cbc";
  const initVector = crypto.randomBytes(16);
  const message = req.body.password;
  const Securitykey = crypto.randomBytes(32);

  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

  let encryptedData = cipher.update(message, "utf-8", "hex");
  encryptedData += cipher.final("hex");

  // console.log("Encrypted message: " + encryptedData);


  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  // console.log("Decrypted message: " + decryptedData);


  const user = {
    name: req.body.name,
    email: req.body.email,
    password: encryptedData,
  };

  const result = await createUser(user);
  return result;
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

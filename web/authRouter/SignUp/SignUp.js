const { createUser } = require('../../../service/impactUserService');
const { isCharactersString, isEmailString, isPasswordString } = require('../../../service/validate/regexValidate');
const crypto = require("crypto");
const { encrypt } = require('../../../service/crypto/crypto')



async function handler(req) {

  if (isCharactersString(req.body.firstName) && isCharactersString(req.body.lastName) && isEmailString(req.body.email) && isCharactersString(req.body.companyName) && isPasswordString(req.body.password)) {

    const hash = encrypt(req.body.password);

    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      companyName: req.body.companyName

    };

    const result = await createUser(user);
    return result;
  }
  else {
    console.log('Data Invalid')
  }
}

function SignUp(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = SignUp;
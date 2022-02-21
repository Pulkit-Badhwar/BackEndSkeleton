const { createUser, fetchUserByUrl } = require('../../../service/impactUserService');
const { isCharactersString, isEmailString, isPasswordString } = require('../../../service/validate/regexValidate');
const { encrypt } = require('../../../service/crypto/crypto');
const nodemailer = require('nodemailer');
const Boom = require('boom');

const randString = () => {
  const len = 8;
  let randStr = ''
  for (let i = 0; i < len; i++) {
    const ch = Math.floor((Math.random() * 10) + 1);
    randStr += ch;
  }
  return randStr
}

const sendEmail = (email, uniqueString) => {
  const Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "pulkitgr892@gmail.com",
      pass: "Silmarils2975"
    }
  });

  var mailOptions;
  let sender = "Pulkit";
  mailOptions = {
    from: sender,
    to: email,
    subject: "test email",
    html: `Press <a href=http://localhost:8200/auth/impact/verifyCodeForEmail/${uniqueString}> here </a> to verify`
  };


  Transport.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Message sent');
    }
  })

}

async function handler(req) {
  let hash = null;

  // if (isCharactersString(req.body.firstName) && isCharactersString(req.body.lastName) && isEmailString(req.body.email) && isCharactersString(req.body.companyName) && isPasswordString(req.body.password)) {
  if (req.body.password) {
    hash = encrypt(req.body.password);
  }

  const uniqueString = randString();
  const CompanyURL = await fetchUserByUrl(req.body.CompanyURL);
  console.log('CompanyURL Data', CompanyURL)


  if (CompanyURL == null) {
    const user = {
      firstName: req.body.firstName || null,
      lastName: req.body.lastName || null,
      email: req.body.email || null,
      password: hash || null,
      mobile: req.body.mobile || null,
      CompanyURL: req.body.CompanyURL || null,
      CompanyID: req.body.CompanyID || null,
      uniqueString: uniqueString,
      isValid: 'false',
      CompanyUrlAuth : 'true',
      Primary : 'true',
    };
    const result = await createUser(user);
    if (req.body.email) {
      sendEmail(req.body.email, uniqueString);
    }
    return result;
    // }
    // else {
    //   console.log('Data Invalid')
    // }
  }
  else {
    throw Boom.badRequest('Company Url already in use');
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
const { createUser, fetchUserByUrl } = require('../../../service/impactUserService');
const { findByEmail } = require('../../../repo/posgresSQL/userRepo')
const { encrypt } = require('../../../service/crypto/crypto');
const nodemailer = require('nodemailer');
const Boom = require('boom');
const nconf = require('nconf');

nconf.env();
const API_URL = nconf.get('API_URL');

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
      pass: "Istari2975"
    }
  });

  var mailOptions;
  let sender = "Pulkit";
  mailOptions = {
    from: sender,
    to: email,
    subject: "test email",
    html: `Press <a href=${API_URL}/auth/impact/verifyCodeForEmail/${uniqueString}> here </a> to verify`
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


  if (req.body.password) {
    hash = encrypt(req.body.password);
  }

  const uniqueString = randString();
  const CompanyURL = await fetchUserByUrl(req.body.CompanyURL);
  const CompanyEmail = await findByEmail(req.body.email);

  if (CompanyURL !== undefined) {
    throw Boom.badRequest('Company Url already in use');
  }
  else if (CompanyEmail !== undefined) {
    throw Boom.badRequest('Email already registered');

  }
  else {
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
      CompanyURLAuth: 'true',
      Primary: 'true',
      CompanyName : req.body.CompanyName
    };
    const result = await createUser(user);
    if (req.body.email) {
      sendEmail(req.body.email, uniqueString);
    }
    return result;
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
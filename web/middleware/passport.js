const passport = require('passport');
const moment = require('moment');
const Local = require('passport-local');
const config = require('nconf');

const { authorizeClientUser } = rootRequire('service/authenticationService');
const { createClientTracker } = rootRequire('service/clientTrackerService');
const { fetchUserByEmail } = require('../../service/impactUserService');

async function createClientTrackerHandler(userObj) {
  const tokenTime = new Date(userObj.tokenTimeStamp);
  const expiryTime = new Date(userObj.tokenTimeStamp + (config.get('JWT_TOKEN_TIME') * 1000));

  logger.info(userObj.token.length);

  const client = {
    email: userObj.email,
    token: userObj.token,
    time: moment(tokenTime, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
    expiry_time: moment(expiryTime, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
    status: 'active',
  };
  const data = await createClientTracker(client);
  return data;
}

async function fetchForEmail(email) {
  const userData = await fetchUserByEmail(email);
  return userData
}

passport.serializeUser((obj, done) => {
  done(null, obj);
});

// used to deserialize the user
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new Local({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, (req, email, password, callback) => {
  try {
    const reqEmail = req.body.email;
    const reqPassword = req.body.password;

    let abc = null;

    const userData = fetchForEmail(reqEmail);

    userData.then(res => {
      if (res.isvalid == 'true') {


        logger.info(`Passport.js :: email : ${reqEmail} :: password : ${reqPassword}`);
        const authResult = authorizeClientUser(reqEmail, reqPassword);
        authResult.then(({ user, token }) => {
          logger.info(`Passport.js :: email :: ${reqEmail} :: token : ${token}`);
          // const currentTime = Math.floor(Date.now() / 1000);
          const userObj = {
            email: user.email,
            token,
            tokenTimeStamp: Date.now(),
          };
          const value = JSON.stringify(userObj);
          redis.set(token, value);
          createClientTrackerHandler(userObj).then((data) => {
            logger.info(`Create in ClientTracker:: ${JSON.stringify(data)}`);
          }).catch((err) => logger.error(err));

          callback(null, userObj);
        }).catch((err) => callback(err));
      }
      else {
        console.log('Email not verified');
      }

    }).catch((err) => callback(err));






  } catch (err) {
    callback(err);
  }
}));

module.exports = passport;
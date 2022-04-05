const passport = require('passport');
const moment = require('moment');
const Local = require('passport-local');
const config = require('nconf');
const Boom = require('boom');

const { authorizeUser } = require('../../service/AuthenticationService');
const { createUserTracker } = require('../../service/userTrackerService');
const { fetchUserByEmail } = require('../../service/userService');

async function createUserTrackerHandler(userObj) {
  const tokenTime = new Date(userObj.tokenTimeStamp);
  const expiryTime = new Date(userObj.tokenTimeStamp + (config.get('JWT_TOKEN_TIME') * 1000));

  logger.info(userObj.token.length);

  const user = {
    email: userObj.email,
    token: userObj.token,
    time: moment(tokenTime, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
    expiry_time: moment(expiryTime, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
    status: 'active',
  };
  const data = await createUserTracker(user);
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

    const userData = fetchForEmail(reqEmail);
    userData.then(res => {
      if (res.isvalid == 'true') {
        logger.info(`Passport.js :: email : ${reqEmail} :: password : ${reqPassword}`);
        const authResult = authorizeUser(reqEmail, reqPassword);
        authResult.then(({ user, token }) => {
          logger.info(`Passport.js :: email :: ${reqEmail} :: token : ${token}`);
          const userObj = {
            email: user.email,
            token,
            tokenTimeStamp: Date.now(),
          };
          // const value = JSON.stringify(userObj);  Redis functionality temp disabled
          // redis.set(token, value);
          createUserTrackerHandler(userObj).then((data) => {
            logger.info(`Create in UserTracker:: ${JSON.stringify(data)}`);
          }).catch((err) => logger.error(err));
          callback(null, userObj);
        }).catch((err) => callback(err));
      }
      else {
        throw Boom.badRequest('Email not verified');
      }
    }).catch((err) => callback(err));
  } catch (err) {
    callback(err);
  }
}));

module.exports = passport;
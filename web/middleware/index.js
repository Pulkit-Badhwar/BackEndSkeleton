const basic = require('./basic');
const handleError = require('./handleError');
const tokenAuthentication = require('../../service/AuthenticationService/tokenAuthentication');
const passport = require('./passport');

module.exports = {
  basic,
  handleError,
  tokenAuthentication,
  passport,
};
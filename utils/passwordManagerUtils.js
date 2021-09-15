const bcrypt = require('bcrypt');

function getHashedPassword(password) {
  return new Promise((resolve, reject) => {
    // generate a salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return reject(err);
      bcrypt.hash(password, salt, (error, hash) => {
        if (error) return reject(error);
        return resolve(hash);
      });
    });
  });
}

function comparePassword(candidatePassword, savedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, savedPassword, (err, isMatch) => {
      if (err) return reject(err);
      resolve(isMatch);
    });
  });
}

module.exports = {
  getHashedPassword,
  comparePassword,
};
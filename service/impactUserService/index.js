const fetchUser = require('./fetchUser');
const fetchUserByEmail = require('./fetchUserByEmail');
const createUser = require('./createUser');
const fetchUserByCode = require('./fetchUserByCode');
const updateByCode = require('./updateByCode');
const updateByEmail = require('./updateByEmail');

module.exports = {
    fetchUser,
    fetchUserByEmail,
    createUser,
    fetchUserByCode,
    updateByCode,
    updateByEmail
};
const fetchUser = require('./fetchUser');
const fetchUserByEmail = require('./fetchUserByEmail');
const createUser = require('./createUser');
const fetchUserByCode = require('./fetchUserByCode');
const updateUserByCode = require('./updateUserByCode');
const updateUserByEmail = require('./updateUserByEmail');
const fetchUserByUrl = require('./fetchUserByUrl');
const saveCompanyImage = require('./saveCompanyImage');

module.exports = {
    fetchUser,
    fetchUserByEmail,
    createUser,
    fetchUserByCode,
    updateUserByCode,
    updateUserByEmail,
    fetchUserByUrl,
    saveCompanyImage,
};
const fetchUser = require('./fetchUser');
const fetchUserByEmail = require('./fetchUserByEmail');
const createUser = require('./createUser');
const fetchUserByCode = require('./fetchUserByCode');
const updateUserByCode = require('./updateUserByCode');
const updateUserByEmail = require('./updateUserByEmail');
const fetchUserByUrl = require('./fetchUserByUrl');
const saveCompanyImage = require('./saveCompanyImage');
const fetchCompanyImage = require('./fetchCompanyImage');
const saveCompanyLogo = require('./saveCompanyLogo');
const fetchCompanyLogo = require('./fetchCompanyLogo');
const saveUserImage = require('./saveUserImage');
const fetchUserImage = require('./fetchUserImage');

module.exports = {
    fetchUser,
    fetchUserByEmail,
    createUser,
    fetchUserByCode,
    updateUserByCode,
    updateUserByEmail,
    fetchUserByUrl,
    saveCompanyImage,
    fetchCompanyImage,
    saveCompanyLogo,
    fetchCompanyLogo,
    saveUserImage,
    fetchUserImage,
};
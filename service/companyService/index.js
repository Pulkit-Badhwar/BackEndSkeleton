const createCompany = require('./createCompany');
const fetchCompanyByCompanyID = require('./fetchCompanyByCompanyID');
const fetchCompanyByEmail = require('./fetchCompanyByEmail');
const updateCompanyByEmail = require('./updateCompanyByEmail');

module.exports = {
    createCompany,
    fetchCompanyByCompanyID,
    fetchCompanyByEmail,
    updateCompanyByEmail,
};
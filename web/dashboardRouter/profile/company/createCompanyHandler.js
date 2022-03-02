const { createCompany } = require('../../../../service/profileService/companyService');
const companyMapping = require('../constant/companymapping.json');


async function handler(req) {

    try {
        const personalEmail = req.headers.email;
      
        const users = {};
        req.body.answers.forEach(data => {
            const type = data.type;
            const key = companyMapping[data.field.id]
            const value = data[type] || null;
            users[key] = value;
        })
        console.log('users', users);

        const userData = await createCompany(users, personalEmail);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createCompanyHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createCompanyHandler;
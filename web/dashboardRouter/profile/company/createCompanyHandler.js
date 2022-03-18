const { createCompany } = require('../../../../service/profileService/companyService');
const companyMapping = require('../constant/companymapping.json');
const { createClient } = require('@typeform/api-client');


async function handler(req) {

    try {
        const personalEmail = req.headers.email;

        const users = {};
        const typeformAPI = createClient({ token: 'tfp_GoVojE5Po2hRz35Qx9juYzQsPYWQ3ZvijRnMpP7ZXof_3soNTrhZzBzj1c' });

        typeformAPI.forms.get({ uid: 'cvU9pW4r/responses?sort=submitted_at,desc' }).then(res => {
            res.items[0].answers.forEach(data => {
                const type = data.type;
                const key = companyMapping[data.field.id]
                const value = data[type] || null;
                users[key] = value;
            })
            console.log('users', users);

            const userData = createCompany(users, personalEmail);
            return userData;
        });
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
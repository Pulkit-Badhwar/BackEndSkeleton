const { createBuisness } = require('../../../../service/profileService/buisnessService');
const buisnessMapping = require('../../../dashboardRouter/profile/constant/buisnessmapping.json');
const { createClient } = require('@typeform/api-client');

async function handler(req) {
    try {

        const email = req.headers.email;
        const users = {};


        const typeformAPI = createClient({ token: 'tfp_GoVojE5Po2hRz35Qx9juYzQsPYWQ3ZvijRnMpP7ZXof_3soNTrhZzBzj1c' });

        typeformAPI.forms.get({ uid: 'rVmLTUdn/responses?sort=submitted_at,desc' }).then(res => {


            res.items[0].answers.forEach(data => {
                const type = data.type;
                const key = buisnessMapping[data.field.id]
                const value = data[type] || null;
                users[key] = value;
            })
            console.log('users', users);

            const userData = createBuisness(users, email);
            return userData;
        });
    } catch (err) {
        throw err;
    }
}

function createBuisnessHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createBuisnessHandler;
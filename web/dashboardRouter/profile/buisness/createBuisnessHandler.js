const { createBuisness } = require('../../../../service/profileService/buisnessService');
const buisnessMapping = require('../../../dashboardRouter/profile/constant/buisnessmapping.json');

async function handler(req) {
    try {
        const email = req.headers.email;
        const users = {};
        req.body.answers.forEach(data => {
            const type = data.type;
            const key = buisnessMapping[data.field.id]
            const value = data[type] || null;
            users[key] = value;
        })
        console.log('users', users);

        const userData = await createBuisness(users, email);
        return userData;
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
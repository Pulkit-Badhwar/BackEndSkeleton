const { createImpact } = require('../../../../service/profileService/impactService');
const { createClient } = require('@typeform/api-client');
const nconf = require('nconf');

async function handler(req) {
    try {
        const email = req.headers.email;

        nconf.env();
        const typeformToken = nconf.get('TYPEFORM_TOKEN');
        const typeformAPI = createClient({ token: typeformToken });

        typeformAPI.forms.get({ uid: 'ICqRFBUl/responses?sort=submitted_at,desc' }).then(res => {

        const user = {
            NoOfWomen : res.items[0].answers[0].number,
            CEOWomen : res.items[0].answers[1].boolean,
        }
        const userData = createImpact(user, email);
        return userData;
    })
    } catch (err) {
        throw err;
    }
}

function createFinanceHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createFinanceHandler;
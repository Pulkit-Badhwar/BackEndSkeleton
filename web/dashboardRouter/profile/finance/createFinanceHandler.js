const { createFinance } = require('../../../../service/profileService/financeService');
const { createClient } = require('@typeform/api-client');

async function handler(req) {
    try {
        const email = req.headers.email;

        const typeformAPI = createClient({ token: 'tfp_5CHJLydFqtbBN5K9YXERJHUNGtGXYAdWHYHYLFDUc6Dv_3sv1WHvXUdTAfi' });

        typeformAPI.forms.get({ uid: 'jBXZncO7/responses?sort=submitted_at,desc' }).then(res => {

        const user = {
            FinanceRev : res.items[0].answers[0].boolean,
            FinanceDate : res.items[0].answers[1].date,
        }
        const userData = createFinance(user, email);
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
const { createFunding } = require('../../../../service/profileService/fundingService');
const { createClient } = require('@typeform/api-client');

async function handler(req) {
    try {
        const email = req.headers.email;



        const typeformAPI = createClient({ token: 'tfp_5CHJLydFqtbBN5K9YXERJHUNGtGXYAdWHYHYLFDUc6Dv_3sv1WHvXUdTAfi' });

        typeformAPI.forms.get({ uid: 'hA2H25ai/responses?sort=submitted_at,desc' }).then(res => {

        const user = {
            FundingRound : res.items[0].answers[0].choice.label,
            FundingAmount : res.items[0].answers[1].number,
        }
        const userData = createFunding(user, email);
        return userData;
    })
    } catch (err) {
        throw err;
    }
}

function createFundingHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createFundingHandler;
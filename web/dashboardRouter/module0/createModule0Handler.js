const { createModule0 } = require('../../../service/module0Service');
const { createClient } = require('@typeform/api-client');

async function handler(req) {
    try {
        const typeformAPI = createClient({ token: 'tfp_5CHJLydFqtbBN5K9YXERJHUNGtGXYAdWHYHYLFDUc6Dv_3sv1WHvXUdTAfi' });

        typeformAPI.forms.get({ uid: 'VwKdvBeF/responses?sort=submitted_at,desc' }).then(res => {
            const user = {
                name: res.items[0].answers[0].text,
            }

            const email = req.headers.email;
            const userData = createModule0(user, email);
            return userData;
        })
    } catch (err) {
        throw err;
    }
}

function createModule0Handler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createModule0Handler;
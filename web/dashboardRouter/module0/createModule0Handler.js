const { createModule0 } = require('../../../service/module0Service');
const { createClient } = require('@typeform/api-client');
const nconf = require('nconf');



async function handler(req) {
    try {
        nconf.env();
        const typeformToken = nconf.get('TYPEFORM_TOKEN');
        const typeformAPI = createClient({ token: typeformToken });

        typeformAPI.forms.get({ uid: `p6nWVJRx/responses?sort=submitted_at,desc` }).then(res => {
            const user = {
                Year_Founded : res.items[0].answers.find(x => x.field.id === 'xPkAk0YvXf7J').date,
                Country_Headquarters : res.items[0].answers.find(x => x.field.id === 'TybfK5rOWsGM').text,
                Sector: res.items[0].answers.find(x => x.field.id === '2Mt3Wofsz2Eb').text,
                Product_Type: res.items[0].answers.find(x => x.field.id === 'txaU12ZDjspA').choice.label,
                Funding_Stage: res.items[0].answers.find(x => x.field.id === 'oYkX0Ryox0uP').choice.label, 
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
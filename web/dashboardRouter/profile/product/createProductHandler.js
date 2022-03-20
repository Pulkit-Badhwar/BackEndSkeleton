const { createProduct } = require('../../../../service/profileService/productService');
const { createClient } = require('@typeform/api-client');
const nconf = require('nconf');

async function handler(req) {
    try {
        const email = req.headers.email;

        nconf.env();
        const typeformToken = nconf.get('TYPEFORM_TOKEN');
        const typeformAPI = createClient({ token: typeformToken });

        typeformAPI.forms.get({ uid: 'OEy5U2Nk/responses?sort=submitted_at,desc' }).then(res => {

        const user = {
            ProductDesc : res.items[0].answers[0].text,
            ProductDate : res.items[0].answers[1].date,
        }
        const userData = createProduct(user, email);
        return userData;
    })
    } catch (err) {
        throw err;
    }
}

function createProductHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createProductHandler;
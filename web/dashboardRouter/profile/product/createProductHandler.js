const { createProduct } = require('../../../../service/profileService/productService');
const { createClient } = require('@typeform/api-client');

async function handler(req) {
    try {
        const email = req.headers.email;

        const typeformAPI = createClient({ token: 'tfp_GoVojE5Po2hRz35Qx9juYzQsPYWQ3ZvijRnMpP7ZXof_3soNTrhZzBzj1c' });

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
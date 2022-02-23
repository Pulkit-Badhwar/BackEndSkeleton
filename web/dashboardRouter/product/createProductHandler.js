const { createProduct } = require('../../../service/productService');

async function handler(req) {
    try {
        const email = req.headers.email;
        const user = {
            ProductDesc : req.body.answers[0].text,
            ProductDate : req.body.answers[1].date,
        }
        const userData = await createProduct(user, email);
        return userData;
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
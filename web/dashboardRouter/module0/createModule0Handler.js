const { createModule0} = require('../../../service/module0Service');

async function handler(req) {
    try {
        const email = req.headers.email;
        const user = {
            name : req.body.answers[0].text,
        }
        const userData = await createModule0(user, email);
        return userData;
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
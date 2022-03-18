const { createToken } = require('../../../service/tokenService');
const moment = require('moment');

async function handler(req) {
    const currentDate = new Date(Date.now());
    try {
        const email = req.body.email;
        const user = {
            tokenName : req.body.tokenName,
            publishedDate : moment(currentDate, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
            claimed : 'false',
        }
        const userData = await createToken(user, email);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createTokenHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createTokenHandler;
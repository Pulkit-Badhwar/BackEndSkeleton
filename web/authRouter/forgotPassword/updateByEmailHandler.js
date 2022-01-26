const { updateByEmail } = require('../../../service/impactUserService');
const { encrypt } = require('../../../service/crypto/crypto')

async function handler(req) {
    try {
        const hash = encrypt(req.body.password);
        const user = {
            email: req.body.email || null,
            password: hash || null
        };
        const result = await updateByEmail(user);
        return result;
    } catch (err) {
        throw err;
    }
}

function updateByEmailHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = updateByEmailHandler;
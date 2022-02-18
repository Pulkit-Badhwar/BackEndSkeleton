const { updateUserByEmail } = require('../../../service/impactUserService');

async function handler(req) {
    try {
        const user = {
            email: req.body.email || null,
        };
        const result = await updateUserByEmail(user);
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
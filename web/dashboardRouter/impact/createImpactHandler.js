const { createImpact } = require('../../../service/impactService');

async function handler(req) {
    try {
        const email = req.headers.email;
        const user = {
            NoOfWomen : req.body.answers[0].number,
            CEOWomen : req.body.answers[1].boolean,
        }
        const userData = await createImpact(user, email);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createFinanceHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createFinanceHandler;
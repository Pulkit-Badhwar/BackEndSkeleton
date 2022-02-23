const { createFinance } = require('../../../service/financeService');

async function handler(req) {
    try {
        const email = req.headers.email;
        const user = {
            FinanceRev : req.body.answers[0].boolean,
            FinanceDate : req.body.answers[1].date,
        }
        const userData = await createFinance(user, email);
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
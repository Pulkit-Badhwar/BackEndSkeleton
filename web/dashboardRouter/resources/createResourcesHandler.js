

async function handler(req) {
    try {
        const email = req.headers.email;
        const user = {
            FundingRound : req.body.answers[0].choice.label,
            FundingAmount : req.body.answers[1].number,
        }
        // const userData = await createFunding(user, email);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createResourcesHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createResourcesHandler;
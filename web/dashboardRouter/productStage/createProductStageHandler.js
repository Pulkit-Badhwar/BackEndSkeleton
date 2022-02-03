const { createProductStage } = require('../../../service/productStageService');

async function handler(req) {
    try {
        const user = {
            CompanyID : req.body.answers[0].text,
            PreviousModules : req.body.answers[1].text,
            

        }
        const userData = await createProductStage(user);
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
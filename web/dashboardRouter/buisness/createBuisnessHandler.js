const { createBuisness } = require('../../../service/buisnessService');

async function handler(req) {
    try {
        const user = {
            CompanyID : req.body.answers[0].text,
            SDGGoals : req.body.answers[1].choices.labels,
            SDG_Imp : req.body.answers[2].choice.label,
            Strategy : req.body.answers[3].boolean,
            Help_Build_one : req.body.answers[4]. boolean,
            CEO_Women : req.body.answers[5].choice.label,
            NoOfWomen : req.body.answers[6].choice.label,
            CEO_Africa : req.body.answers[7].boolean,
            NoOfAfrica : req.body.answers[8].choice.label,
            License_Regulation : req.body.answers[9].choice.label,
            License_Desc : req.body.answers[10].text,
            Country : req.body.answers[11].text,
            SecondLicense : req.body.answers[12].boolean,
            Buisness_model : req.body.answers[13].choices.labels,
            Revenue_model : req.body.answers[14].text,
            Buisness_vision : req.body.answers[15].text,
            Buisness_milestones : req.body.answers[16].text,
            Strength_Type  : req.body.answers[17].text,
            Weakness_Type : req.body.answers[18].text,
            ShareHolderAgreement : req.body.answers[19].boolean,
            ShareHolderName : req.body.answers[20].text,
            ShareHolderPercentage : req.body.answers[21].number,
            SecondShareHolder : req.body.answers[22].boolean,
            ExEmployeeShares : req.body.answers[23].boolean,}
        const userData = await createBuisness(user);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createBuisnessHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createBuisnessHandler;
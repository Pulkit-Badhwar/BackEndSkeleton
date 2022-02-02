const { createOrganization } = require('../../../service/organizationService');

async function handler(req) {
    try {
        const user = {
            CompanyID : req.body.answers[0].text,
            previousModules : req.body.answers[1].boolean,
            Num_Of_FTE_Emp : req.body.answers[2].number,
            Num_Of_PTE_Emp : req.body.answers[3].number,
            Hiring12Months : req.body.answers[4].choice.label,
            SeniorPositions : req.body.answers[5].choices.labels,
            Job_title : req.body.answers[6].text, // hire table
            Country : req.body.answers[7].text, // hire table
            Salary_range : req.body.answers[8].choice.label, // hire table
            SecondSenior : req.body.answers[9].boolean,
            Hiring_Platform : req.body.answers[10].text,
            Shortlist : req.body.answers[11].choice.label,
            UseContractors : req.body.answers[12].boolean,
            OrgChart : req.body.answers[13].boolean,
            FirstLeaderShip : req.body.answers[14].text,
            FirstLeaderShipRole : req.body.answers[15].choice.label,
            FirstLeaderShipFunction : req.body.answers[16].text,
            FirstLeaderShipCountry : req.body.answers[17].text,
            FirstLeaderShipLinkdin : req.body.answers[18].url,
            AnotherLeaderShip : req.body.answers[19].boolean,
            Liability_insurance : req.body.answers[20].choices.labels,
            Advisors : req.body.answers[21].boolean
        }
        const userData = await createOrganization(user);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createOrganizationHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createOrganizationHandler;
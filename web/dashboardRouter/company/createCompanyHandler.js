const { createCompany } = require('../../../service/companyService');

async function handler(req) {
    try {
        const user = {
            firstName : req.body.answers[0].text,
            lastName : req.body.answers[1].text,
            CompanyID : req.body.answers[2].text,
            email : req.body.answers[3].email,
            ProvideMobileNo : req.body.answers[4].boolean,
            RoleInCompany : req.body.answers[5].choice.label,
            PersonoalLinkdin : req.body.answers[6].boolean,
            Company_Name : req.body.answers[7].text,
            Year_Founded : req.body.answers[8].date,
            Website : req.body.answers[9].boolean,
            LinkedinURL : req.body.answers[10].choice.label,
            Description : req.body.answers[11].text,
            PrimarySector : req.body.answers[12].text,
            SecondarySector : req.body.answers[13].boolean,
            Country : req.body.answers[14].text,
            Registration_no : req.body.answers[15].text,
            RegisteredOtherCountry : req.body.answers[16].boolean,
            Legal_Entity : req.body.answers[17].choice.label,
            Continent_ops : req.body.answers[18].text,
            OperationalInOtherCountries : req.body.answers[19].boolean,
            Expansion12Months  : req.body.answers[20].choice.label,
            Other : req.body.answers[21].text
        }
        const userData = await createCompany(user);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createCompanyHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createCompanyHandler;
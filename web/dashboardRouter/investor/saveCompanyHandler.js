const { saveCompany, fetchCompanyByID, updateCompanyByID } = require('../../../service/investorService');

async function handler(req) {
    try {
        let userData = null;
        const user = {
            CompanyID: req.body.CompanyID,
            Stage: req.body.Stage,
            Investor_ID: req.body.Investor_ID
        }
        const companyData = await fetchCompanyByID(user);
        if (companyData.length === 0) {
            console.log('if')
            userData = await saveCompany(user);
        }
        else {
            console.log('else')
            userData = await updateCompanyByID(user);
        }
        return userData
    } catch (err) {
        throw err;
    }
}

function saveCompanyHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data: data,
        });
    }).catch((err) => next(err));
}

module.exports = saveCompanyHandler;
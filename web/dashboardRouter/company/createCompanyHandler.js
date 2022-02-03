const { createCompany } = require('../../../service/companyService');

async function handler(req) {

    try {
        let i = 0;
        const user = {
            // personal questions from here 
            firstName : req.body.answers.find(x => x.field.id === 'ZJqRU9iMbjCS').text,
            lastName : req.body.answers.find(x => x.field.id === 'iXgFSDuGLPKw').text,
            CompanyID : req.body.answers.find(x => x.field.id === 'l9r5gWCtQ7PJ').text,
            email : req.body.answers.find(x => x.field.id === 'ToFID8nh0zF7').email,
            ProvideMobileNo : req.body.answers.find(x => x.field.id === 'heU6bCEc0UxV').boolean,
            MobileNo :  req.body.answers.find(x => x.field.id === 'ml1rJ3dBeoPU') ? req.body.answers.find(x => x.field.id === 'ml1rJ3dBeoPU').phone_number :  null,
            RoleInCompany :  req.body.answers.find(x => x.field.id === 'MPkvI7Kh8nwd').choice.label,
            PersonalLinkdin : req.body.answers.find(x => x.field.id === 'XklrVOfYxTnt').boolean,
            PersonalLinkdinURl : req.body.answers.find(x => x.field.id === 'd5Lw5ZScwT9K') ? req.body.answers.find(x => x.field.id === 'd5Lw5ZScwT9K').url : null,
            PersonalCity : req.body.answers.find(x => x.field.id === 'LvUvuAbypvO2') ? req.body.answers.find(x => x.field.id === 'LvUvuAbypvO2').text : null,
            PersonalCountry : req.body.answers.find(x => x.field.id === 'Jbe6FGvmjHUx') ? req.body.answers.find(x => x.field.id === 'Jbe6FGvmjHUx').text : null,


            // company questions from here 
            Company_Name : req.body.answers.find(x => x.field.id === '1QCvzy4uRtqp').text,
            Year_Founded : req.body.answers.find(x => x.field.id === 'DCqRxTbrmcvS').date,

            Website : req.body.answers.find(x => x.field.id === 'gmPzuDe78lU3').boolean,
            WebsiteURL : req.body.answers.find(x => x.field.id === '9W8kkevC5JaZ') ? req.body.answers.find(x => x.field.id === '9W8kkevC5JaZ').url : null,

            Linkedin : req.body.answers.find(x => x.field.id === 'Z0uSIOHOrsaz').choice.label,
            LinkedinURL : req.body.answers.find(x => x.field.id === 'wuRQddGFKNf7') ? req.body.answers.find(x => x.field.id === 'wuRQddGFKNf7').url : null,

            Description : req.body.answers.find(x => x.field.id === 'ViO6AT0iyKwh').text,
            PrimarySector : req.body.answers.find(x => x.field.id === 'e8RX8rkdDUEo').text,

            SecondarySectorBool : req.body.answers.find(x => x.field.id === '0vHjPmf9KiAj') ? req.body.answers.find(x => x.field.id === '0vHjPmf9KiAj').boolean : null,
            SecondarySector : req.body.answers.find(x => x.field.id === 'nXzNemBgY1xq') ? req.body.answers.find(x => x.field.id === 'nXzNemBgY1xq').text  : null,
            SecondarySectorBool2 : req.body.answers.find(x => x.field.id === 'RpMOSeppt9Z7') ? req.body.answers.find(x => x.field.id === 'RpMOSeppt9Z7').boolean : null,
            SecondarySector2 : req.body.answers.find(x => x.field.id === 'EW08fsYozTFC') ? req.body.answers.find(x => x.field.id === 'EW08fsYozTFC').text  : null,

            Country : req.body.answers.find(x => x.field.id === '8kRSWNaC3jpf').text,
            Registration_no : req.body.answers.find(x => x.field.id === 'EvXKKGOSwux1').text,

            RegisteredOtherCountryBool : req.body.answers.find(x => x.field.id === '3FBNKMXHEpDq').boolean,
            RegisteredOtherCountry2 : req.body.answers.find(x => x.field.id === 'jNzNVq196KDY') ? req.body.answers.find(x => x.field.id === 'jNzNVq196KDY').text : null,
            Registration_no2 : req.body.answers.find(x => x.field.id === 'qfOtVuSFKrVg') ? req.body.answers.find(x => x.field.id === 'qfOtVuSFKrVg').text  : null,

            RegisteredOtherCountryBool2 : req.body.answers.find(x => x.field.id === 'HENygDSjVEPp') ? req.body.answers.find(x => x.field.id === 'HENygDSjVEPp').boolean  : null,
            RegisteredOtherCountry3 : req.body.answers.find(x => x.field.id === 'Db78p4ZpK1Sf') ? req.body.answers.find(x => x.field.id === 'Db78p4ZpK1Sf').text   : null,

            Legal_Entity : req.body.answers.find(x => x.field.id === 'QutYi4Jv19Rz').choice.label,
            ParentOrSubsidaryCompany : req.body.answers.find(x => x.field.id === 'vkbfXfUf4ixL') ? req.body.answers.find(x => x.field.id === 'vkbfXfUf4ixL').text : null,
    

            Continent_ops : req.body.answers.find(x => x.field.id === 'WLJRTYGLJ9fO').text,
           
            OperationalInOtherCountriesBool : req.body.answers.find(x => x.field.id === 'az1jmtv5a6I6') ? req.body.answers.find(x => x.field.id === 'az1jmtv5a6I6').boolean  : null,
            OperationalInOtherCountries : req.body.answers.find(x => x.field.id === 'smJEnmrNS13a') ? req.body.answers.find(x => x.field.id === 'smJEnmrNS13a').text  : null,

            OperationalInOtherCountriesBool2 : req.body.answers.find(x => x.field.id === 'oDNeKGBlmlTy') ? req.body.answers.find(x => x.field.id === 'oDNeKGBlmlTy').boolean : null,
            OperationalInOtherCountries2 : req.body.answers.find(x => x.field.id === '35CNHnG8dy2k') ? req.body.answers.find(x => x.field.id === '35CNHnG8dy2k').text : null,

            Expansion12Months  : req.body.answers.find(x => x.field.id === 'aYBLZQ9VyrYt').choice.label,
            Expansion12MonthsCountry : req.body.answers.find(x => x.field.id === 'jMJiSii44w5F') ? req.body.answers.find(x => x.field.id === 'jMJiSii44w5F').text : null,

            ExpansionOtherCountryBool : req.body.answers.find(x => x.field.id === 'DRocC2OtZgBI') ? req.body.answers.find(x => x.field.id === 'DRocC2OtZgBI').boolean  : null,
            ExpansionOtherCountry : req.body.answers.find(x => x.field.id === 'STvw1SpNlgS4') ? req.body.answers.find(x => x.field.id === 'STvw1SpNlgS4').text : null,

            ExpansionOtherCountryBool2 : req.body.answers.find(x => x.field.id === 'CSJSaXf9PImO') ? req.body.answers.find(x => x.field.id === 'CSJSaXf9PImO').boolean  :  null,
            ExpansionOtherCountry2 : req.body.answers.find(x => x.field.id === '3g97sqreK1DP') ? req.body.answers.find(x => x.field.id === '3g97sqreK1DP').text : null,

            Other : req.body.answers.find(x => x.field.id === 'PngOtVUlWZPK').text,
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
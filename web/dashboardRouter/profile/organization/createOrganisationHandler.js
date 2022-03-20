const { createOrganisation } = require('../../../../service/profileService/organizationService');
const { createClient } = require('@typeform/api-client');
const nconf = require('nconf');

async function handler(req) {
    try {
        const email = req.headers.email;

        nconf.env();
        const typeformToken = nconf.get('TYPEFORM_TOKEN');
        const typeformAPI = createClient({ token: typeformToken });

        typeformAPI.forms.get({ uid: 'n1DWwHYA/responses?sort=submitted_at,desc' }).then(res => {

        const user = {
            CompanyID: res.items[0].answers.find(x => x.field.id === 'OCSWrN9pq8Ny').text,
            previousModules: res.items[0].answers.find(x => x.field.id === 'wAr2jWjebvk7').boolean,


            // Personal questions if previous modules not filled all will be null if filed previous modules
            firstName: res.items[0].answers.find(x => x.field.id === 'ZJqRU9iMbjCS') ? res.items[0].answers.find(x => x.field.id === 'ZJqRU9iMbjCS').text  : null,
            lastName: res.items[0].answers.find(x => x.field.id === 'iXgFSDuGLPKw') ? res.items[0].answers.find(x => x.field.id === 'iXgFSDuGLPKw').text   : null,
            CompanyID: res.items[0].answers.find(x => x.field.id === 'l9r5gWCtQ7PJ') ? res.items[0].answers.find(x => x.field.id === 'l9r5gWCtQ7PJ').text  : null,
            email: res.items[0].answers.find(x => x.field.id === 'ToFID8nh0zF7') ? res.items[0].answers.find(x => x.field.id === 'ToFID8nh0zF7').email  : null,
            ProvideMobileNo: res.items[0].answers.find(x => x.field.id === 'heU6bCEc0UxV') ? res.items[0].answers.find(x => x.field.id === 'heU6bCEc0UxV').boolean  : null,
            MobileNo: res.items[0].answers.find(x => x.field.id === 'ml1rJ3dBeoPU') ? res.items[0].answers.find(x => x.field.id === 'ml1rJ3dBeoPU').phone_number : null,
            RoleInCompany: res.items[0].answers.find(x => x.field.id === 'MPkvI7Kh8nwd') ? res.items[0].answers.find(x => x.field.id === 'MPkvI7Kh8nwd').choice.label  : null,
            PersonalLinkdin: res.items[0].answers.find(x => x.field.id === 'XklrVOfYxTnt') ? res.items[0].answers.find(x => x.field.id === 'XklrVOfYxTnt').boolean   : null,
            PersonalLinkdinURl: res.items[0].answers.find(x => x.field.id === 'd5Lw5ZScwT9K') ? res.items[0].answers.find(x => x.field.id === 'd5Lw5ZScwT9K').url : null,
            PersonalCity: res.items[0].answers.find(x => x.field.id === 'LvUvuAbypvO2') ? res.items[0].answers.find(x => x.field.id === 'LvUvuAbypvO2').text : null,
            PersonalCountry: res.items[0].answers.find(x => x.field.id === 'Jbe6FGvmjHUx') ? res.items[0].answers.find(x => x.field.id === 'Jbe6FGvmjHUx').text : null,


            // company questions 
            Num_Of_FTE_Emp: res.items[0].answers.find(x => x.field.id === 'PXvTBseB8wwn').number,
            Num_Of_PTE_Emp: res.items[0].answers.find(x => x.field.id === 'D8hH8nzXrx4F').number,
            Hiring12Months: res.items[0].answers.find(x => x.field.id === 'JHVKlmCnJwLG').choice.label,


            //hire table
            SeniorPositions: res.items[0].answers.find(x => x.field.id === '99zaDFNoDJRx').choices.labels,

            //Commercial
        //     CommercialJob_title: res.items[0].answers.find(x => x.field.id === 'aXwBgDqgsANE').text,
        //     CommercialCountry: res.items[0].answers.find(x => x.field.id === 'c3RJBDxKExv8').text,
        //     CommercialSalary_range: res.items[0].answers.find(x => x.field.id === 'EOQ3OcDkKVRB').choice.label,

        //     CommercialSecondSeniorPositions: res.items[0].answers.find(x => x.field.id === '8RpiN9AOlemG').boolean,
        //     CommercialJob_title2: res.items[0].answers.find(x => x.field.id === 'vuWmOhflWe5D').text,
        //     CommercialCountrySameAsFirst: res.items[0].answers.find(x => x.field.id === '0LdjpRqPZecm').boolean,
        //     CommercialCountry2: res.items[0].answers.find(x => x.field.id === 'IgUh4G7ttz83').text,
        //     CommercialSalary_range2: res.items[0].answers.find(x => x.field.id === 'jWSUHl5IiBew').choice.label,

        //     CommercialThirdSeniorPositions: res.items[0].answers.find(x => x.field.id === 'qti27lvs4aTp').boolean,
        //     CommercialJob_title3: res.items[0].answers.find(x => x.field.id === 'LudsSnA521K9').text,
        //     CommercialCountrySameAsSecond: res.items[0].answers.find(x => x.field.id === 'Hduvnm7DSrPI').boolean,
        //     CommercialCountry3: eq.body.answers.find(x => x.field.id === 'td3lxC89nhOE').text,
        //     CommercialSalary_range3: res.items[0].answers.find(x => x.field.id === 'Kvb0AaqqUZdA').choice.label,


        //     //Technical
        //     TechnicalJob_title: res.items[0].answers.find(x => x.field.id === 'J328RblGN5Lh').text,
        //     TechnicalCountry: res.items[0].answers.find(x => x.field.id === 'td3lxC89nhOE').text,
        //     TechnicalSalary_range: res.items[0].answers.find(x => x.field.id === 'r2MGAP6bUIDw').choice.label,

        //     TechnicalSecondSeniorPositions: res.items[0].answers.find(x => x.field.id === 'lhXyIG7OChBM').boolean,
        //     TechnicalJob_title2: res.items[0].answers.find(x => x.field.id === 'GBiBL6jXtIov').text,
        //     TechnicalCountrySameAsFirst: res.items[0].answers.find(x => x.field.id === 'gMYa6yDlNRKa').boolean,
        //     TechnicalCountry2: eq.body.answers.find(x => x.field.id === 'ylzYOI6Ol8lP').text,
        //     TechnicalSalary_range2: res.items[0].answers.find(x => x.field.id === '1xyrkQwb4LTb').choice.label,

        //     TechnicalThirdSeniorPositions: res.items[0].answers.find(x => x.field.id === 'sH3egnMKI5Nq').boolean,


        //     // Admin
        //     AdminJob_title: res.items[0].answers.find(x => x.field.id === 'NDphA72p65Kw').text,
        //     AdminCountry: res.items[0].answers.find(x => x.field.id === 'aaMV7n1c7DPT').text,
        //     AdminSalary_range: res.items[0].answers.find(x => x.field.id === 'pJ4gYPXyzhx9').choice.label,

        //     AdminSecondSeniorPositions: res.items[0].answers.find(x => x.field.id === 'sxzz2BYF3o30').boolean,
        //     AdminJob_title2: res.items[0].answers.find(x => x.field.id === 'YQDqPZManZf5').text,
        //     AdminCountrySameAsFirst: res.items[0].answers.find(x => x.field.id === '9IW327wXwwnK').boolean,
        //     AdminCountry2: eq.body.answers.find(x => x.field.id === 'G9lkDGXUTkvT').text,
        //     AdminSalary_range2: res.items[0].answers.find(x => x.field.id === 'F4DkZzyu7UXb').choice.label,

        //     AdminThirdSeniorPositions: res.items[0].answers.find(x => x.field.id === 'ZaqKVaLdBLbz').boolean,
        //     AdminJob_title3: res.items[0].answers.find(x => x.field.id === 'NRpmgfRv0wbQ').text,
        //     AdminCountrySameAsSecond: res.items[0].answers.find(x => x.field.id === 'dEUJUdbtRrkK').boolean,
        //     AdminCountry3: eq.body.answers.find(x => x.field.id === 'b6mYKJoZOVEt').text,
        //     AdminSalary_range3: res.items[0].answers.find(x => x.field.id === 'JGkNhEintshb').choice.label,


        //     // other 
        //     OtherJob_title2: res.items[0].answers.find(x => x.field.id === 'YMJfHWxubvP6').text,
        //     OtherCountry: res.items[0].answers.find(x => x.field.id === 'GjUZB8C2DRat').text,
        //     OtherSalary_range: res.items[0].answers.find(x => x.field.id === '2giRaAKk44fd').choice.label,

        //     OtherSecondSeniorPositions: res.items[0].answers.find(x => x.field.id === 'FMvbAnRyHycO').boolean,
        //     OtherJob_title2: res.items[0].answers.find(x => x.field.id === '5aHa2GvNbLyO').text,
        //     OtherCountrySameAsFirst: res.items[0].answers.find(x => x.field.id === 'DEm5KxAhuHrb').boolean,
        //     OtherCountry2: eq.body.answers.find(x => x.field.id === 'knnpVX8HWfaY').text,
        //     OtherSalary_range2: res.items[0].answers.find(x => x.field.id === 'tylEa5AhR8DO').choice.label,



        //    // Hiring

        //     Hiring_Platform: res.items[0].answers.find(x => x.field.id === 'qNVEwJHQrDVn').text,
        //     Shortlist: res.items[0].answers.find(x => x.field.id === 'g8UdIjBjovXa').choice.label,
        //     UseContractors: res.items[0].answers.find(x => x.field.id === 'd2H0e7xYxYz1').boolean,
        //     ContractorsFunction : res.items[0].answers.find(x => x.field.id === 'eH2jmk3MLfv4').text,
        //     OrgChart: res.items[0].answers.find(x => x.field.id === 't6lQs9du5vKr').boolean,
        //     OrgChartUrl : 'url',

        //     FirstLeaderShip: res.items[0].answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     FirstLeaderShipRole: res.items[0].answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     FirstLeaderShipFunction: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FirstLeaderShipCountry: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FirstLeaderShipLinkdin: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,

        //     SecondLeaderShip: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SecondLeaderShipName: res.items[0].answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     SecondLeaderShipRole: res.items[0].answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     SecondLeaderShipFunction: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     SecondLeaderShipCountry: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     SecondLeaderShipLinkdin: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,


        //     ThirdLeaderShip: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     ThirdLeaderShipName: res.items[0].answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     ThirdLeaderShipRole: res.items[0].answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     ThirdLeaderShipFunction: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     ThirdLeaderShipCountry: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     ThirdLeaderShipLinkdin: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,

        //     FourthLeaderShip: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FourthLeaderShipName: res.items[0].answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     FourthLeaderShipRole: res.items[0].answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     FourthLeaderShipFunction: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FourthLeaderShipCountry: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FourthLeaderShipLinkdin: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,

        //     FifthLeaderShip: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FifthLeaderShipName: res.items[0].answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     FifthLeaderShipRole: res.items[0].answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     FifthLeaderShipFunction: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FifthLeaderShipCountry: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FifthLeaderShipLinkdin: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,


        //     SixthLeaderShip: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SixthLeaderShipName: res.items[0].answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     SixthLeaderShipRole: res.items[0].answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     SixthLeaderShipFunction: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     SixthLeaderShipCountry: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     SixthLeaderShipLinkdin: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,

        
        //     Liability_insurance: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').choices.labels,



        //     // Advisors
        //     Advisors: res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     FirstAdvisorName : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FirstAdvisorCompany : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FirstAdvisorLinkedIn : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     SecondAdvisor : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SecondAdvisorName : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SecondAdvisorCompany : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SecondAdvisorLinkedIn : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     ThirdAdvisor : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     ThirdAdvisorName : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     ThirdAdvisorCompany : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     ThirdAdvisorLinkedIn : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     FourthAdvisor : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FourthAdvisorName : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FourthAdvisorCompany : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FourthAdvisorLinkedIn : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     FifthAdvisor : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FifhtAdvisorName : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FifthAdvisorCompany : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FifthAdvisorLinkedIn : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     SixthAdvisor : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SixthAdvisorName : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SixthAdvisorCompany : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SixthAdvisorLinkedIn : res.items[0].answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        }
        const userData = createOrganisation(user, email);
        return userData;
    });
    } catch (err) {
        throw err;
    }
}

function createOrganisationHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createOrganisationHandler;
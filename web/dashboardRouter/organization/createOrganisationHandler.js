const { createOrganisation } = require('../../../service/organizationService');

async function handler(req) {
    try {
        const email = req.headers.email;
        const user = {
            CompanyID: req.body.answers.find(x => x.field.id === 'OCSWrN9pq8Ny').text,
            previousModules: req.body.answers.find(x => x.field.id === 'wAr2jWjebvk7').boolean,


            // Personal questions if previous modules not filled all will be null if filed previous modules
            firstName: req.body.answers.find(x => x.field.id === 'ZJqRU9iMbjCS') ? req.body.answers.find(x => x.field.id === 'ZJqRU9iMbjCS').text  : null,
            lastName: req.body.answers.find(x => x.field.id === 'iXgFSDuGLPKw') ? req.body.answers.find(x => x.field.id === 'iXgFSDuGLPKw').text   : null,
            CompanyID: req.body.answers.find(x => x.field.id === 'l9r5gWCtQ7PJ') ? req.body.answers.find(x => x.field.id === 'l9r5gWCtQ7PJ').text  : null,
            email: req.body.answers.find(x => x.field.id === 'ToFID8nh0zF7') ? req.body.answers.find(x => x.field.id === 'ToFID8nh0zF7').email  : null,
            ProvideMobileNo: req.body.answers.find(x => x.field.id === 'heU6bCEc0UxV') ? req.body.answers.find(x => x.field.id === 'heU6bCEc0UxV').boolean  : null,
            MobileNo: req.body.answers.find(x => x.field.id === 'ml1rJ3dBeoPU') ? req.body.answers.find(x => x.field.id === 'ml1rJ3dBeoPU').phone_number : null,
            RoleInCompany: req.body.answers.find(x => x.field.id === 'MPkvI7Kh8nwd') ? req.body.answers.find(x => x.field.id === 'MPkvI7Kh8nwd').choice.label  : null,
            PersonalLinkdin: req.body.answers.find(x => x.field.id === 'XklrVOfYxTnt') ? req.body.answers.find(x => x.field.id === 'XklrVOfYxTnt').boolean   : null,
            PersonalLinkdinURl: req.body.answers.find(x => x.field.id === 'd5Lw5ZScwT9K') ? req.body.answers.find(x => x.field.id === 'd5Lw5ZScwT9K').url : null,
            PersonalCity: req.body.answers.find(x => x.field.id === 'LvUvuAbypvO2') ? req.body.answers.find(x => x.field.id === 'LvUvuAbypvO2').text : null,
            PersonalCountry: req.body.answers.find(x => x.field.id === 'Jbe6FGvmjHUx') ? req.body.answers.find(x => x.field.id === 'Jbe6FGvmjHUx').text : null,


            // company questions 
            Num_Of_FTE_Emp: req.body.answers.find(x => x.field.id === 'PXvTBseB8wwn').number,
            Num_Of_PTE_Emp: req.body.answers.find(x => x.field.id === 'D8hH8nzXrx4F').number,
            Hiring12Months: req.body.answers.find(x => x.field.id === 'JHVKlmCnJwLG').choice.label,


            //hire table
            SeniorPositions: req.body.answers.find(x => x.field.id === '99zaDFNoDJRx').choices.labels,

            //Commercial
        //     CommercialJob_title: req.body.answers.find(x => x.field.id === 'aXwBgDqgsANE').text,
        //     CommercialCountry: req.body.answers.find(x => x.field.id === 'c3RJBDxKExv8').text,
        //     CommercialSalary_range: req.body.answers.find(x => x.field.id === 'EOQ3OcDkKVRB').choice.label,

        //     CommercialSecondSeniorPositions: req.body.answers.find(x => x.field.id === '8RpiN9AOlemG').boolean,
        //     CommercialJob_title2: req.body.answers.find(x => x.field.id === 'vuWmOhflWe5D').text,
        //     CommercialCountrySameAsFirst: req.body.answers.find(x => x.field.id === '0LdjpRqPZecm').boolean,
        //     CommercialCountry2: req.body.answers.find(x => x.field.id === 'IgUh4G7ttz83').text,
        //     CommercialSalary_range2: req.body.answers.find(x => x.field.id === 'jWSUHl5IiBew').choice.label,

        //     CommercialThirdSeniorPositions: req.body.answers.find(x => x.field.id === 'qti27lvs4aTp').boolean,
        //     CommercialJob_title3: req.body.answers.find(x => x.field.id === 'LudsSnA521K9').text,
        //     CommercialCountrySameAsSecond: req.body.answers.find(x => x.field.id === 'Hduvnm7DSrPI').boolean,
        //     CommercialCountry3: eq.body.answers.find(x => x.field.id === 'td3lxC89nhOE').text,
        //     CommercialSalary_range3: req.body.answers.find(x => x.field.id === 'Kvb0AaqqUZdA').choice.label,


        //     //Technical
        //     TechnicalJob_title: req.body.answers.find(x => x.field.id === 'J328RblGN5Lh').text,
        //     TechnicalCountry: req.body.answers.find(x => x.field.id === 'td3lxC89nhOE').text,
        //     TechnicalSalary_range: req.body.answers.find(x => x.field.id === 'r2MGAP6bUIDw').choice.label,

        //     TechnicalSecondSeniorPositions: req.body.answers.find(x => x.field.id === 'lhXyIG7OChBM').boolean,
        //     TechnicalJob_title2: req.body.answers.find(x => x.field.id === 'GBiBL6jXtIov').text,
        //     TechnicalCountrySameAsFirst: req.body.answers.find(x => x.field.id === 'gMYa6yDlNRKa').boolean,
        //     TechnicalCountry2: eq.body.answers.find(x => x.field.id === 'ylzYOI6Ol8lP').text,
        //     TechnicalSalary_range2: req.body.answers.find(x => x.field.id === '1xyrkQwb4LTb').choice.label,

        //     TechnicalThirdSeniorPositions: req.body.answers.find(x => x.field.id === 'sH3egnMKI5Nq').boolean,


        //     // Admin
        //     AdminJob_title: req.body.answers.find(x => x.field.id === 'NDphA72p65Kw').text,
        //     AdminCountry: req.body.answers.find(x => x.field.id === 'aaMV7n1c7DPT').text,
        //     AdminSalary_range: req.body.answers.find(x => x.field.id === 'pJ4gYPXyzhx9').choice.label,

        //     AdminSecondSeniorPositions: req.body.answers.find(x => x.field.id === 'sxzz2BYF3o30').boolean,
        //     AdminJob_title2: req.body.answers.find(x => x.field.id === 'YQDqPZManZf5').text,
        //     AdminCountrySameAsFirst: req.body.answers.find(x => x.field.id === '9IW327wXwwnK').boolean,
        //     AdminCountry2: eq.body.answers.find(x => x.field.id === 'G9lkDGXUTkvT').text,
        //     AdminSalary_range2: req.body.answers.find(x => x.field.id === 'F4DkZzyu7UXb').choice.label,

        //     AdminThirdSeniorPositions: req.body.answers.find(x => x.field.id === 'ZaqKVaLdBLbz').boolean,
        //     AdminJob_title3: req.body.answers.find(x => x.field.id === 'NRpmgfRv0wbQ').text,
        //     AdminCountrySameAsSecond: req.body.answers.find(x => x.field.id === 'dEUJUdbtRrkK').boolean,
        //     AdminCountry3: eq.body.answers.find(x => x.field.id === 'b6mYKJoZOVEt').text,
        //     AdminSalary_range3: req.body.answers.find(x => x.field.id === 'JGkNhEintshb').choice.label,


        //     // other 
        //     OtherJob_title2: req.body.answers.find(x => x.field.id === 'YMJfHWxubvP6').text,
        //     OtherCountry: req.body.answers.find(x => x.field.id === 'GjUZB8C2DRat').text,
        //     OtherSalary_range: req.body.answers.find(x => x.field.id === '2giRaAKk44fd').choice.label,

        //     OtherSecondSeniorPositions: req.body.answers.find(x => x.field.id === 'FMvbAnRyHycO').boolean,
        //     OtherJob_title2: req.body.answers.find(x => x.field.id === '5aHa2GvNbLyO').text,
        //     OtherCountrySameAsFirst: req.body.answers.find(x => x.field.id === 'DEm5KxAhuHrb').boolean,
        //     OtherCountry2: eq.body.answers.find(x => x.field.id === 'knnpVX8HWfaY').text,
        //     OtherSalary_range2: req.body.answers.find(x => x.field.id === 'tylEa5AhR8DO').choice.label,



        //    // Hiring

        //     Hiring_Platform: req.body.answers.find(x => x.field.id === 'qNVEwJHQrDVn').text,
        //     Shortlist: req.body.answers.find(x => x.field.id === 'g8UdIjBjovXa').choice.label,
        //     UseContractors: req.body.answers.find(x => x.field.id === 'd2H0e7xYxYz1').boolean,
        //     ContractorsFunction : req.body.answers.find(x => x.field.id === 'eH2jmk3MLfv4').text,
        //     OrgChart: req.body.answers.find(x => x.field.id === 't6lQs9du5vKr').boolean,
        //     OrgChartUrl : 'url',

        //     FirstLeaderShip: req.body.answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     FirstLeaderShipRole: req.body.answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     FirstLeaderShipFunction: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FirstLeaderShipCountry: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FirstLeaderShipLinkdin: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,

        //     SecondLeaderShip: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SecondLeaderShipName: req.body.answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     SecondLeaderShipRole: req.body.answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     SecondLeaderShipFunction: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     SecondLeaderShipCountry: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     SecondLeaderShipLinkdin: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,


        //     ThirdLeaderShip: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     ThirdLeaderShipName: req.body.answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     ThirdLeaderShipRole: req.body.answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     ThirdLeaderShipFunction: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     ThirdLeaderShipCountry: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     ThirdLeaderShipLinkdin: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,

        //     FourthLeaderShip: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FourthLeaderShipName: req.body.answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     FourthLeaderShipRole: req.body.answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     FourthLeaderShipFunction: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FourthLeaderShipCountry: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FourthLeaderShipLinkdin: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,

        //     FifthLeaderShip: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FifthLeaderShipName: req.body.answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     FifthLeaderShipRole: req.body.answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     FifthLeaderShipFunction: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FifthLeaderShipCountry: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     FifthLeaderShipLinkdin: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,


        //     SixthLeaderShip: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SixthLeaderShipName: req.body.answers.find(x => x.field.id === 'KGbEwuNyQpiR').text,
        //     SixthLeaderShipRole: req.body.answers.find(x => x.field.id === 'hWHCT2I6BMKs').choice.label,
        //     SixthLeaderShipFunction: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     SixthLeaderShipCountry: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
        //     SixthLeaderShipLinkdin: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').url,

        
        //     Liability_insurance: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').choices.labels,



        //     // Advisors
        //     Advisors: req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     FirstAdvisorName : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FirstAdvisorCompany : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FirstAdvisorLinkedIn : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     SecondAdvisor : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SecondAdvisorName : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SecondAdvisorCompany : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SecondAdvisorLinkedIn : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     ThirdAdvisor : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     ThirdAdvisorName : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     ThirdAdvisorCompany : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     ThirdAdvisorLinkedIn : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     FourthAdvisor : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FourthAdvisorName : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FourthAdvisorCompany : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FourthAdvisorLinkedIn : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     FifthAdvisor : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FifhtAdvisorName : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FifthAdvisorCompany : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     FifthAdvisorLinkedIn : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,

        //     SixthAdvisor : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SixthAdvisorName : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SixthAdvisorCompany : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        //     SixthAdvisorLinkedIn : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').boolean,
        }
        const userData = await createOrganisation(user, email);
        return userData;
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
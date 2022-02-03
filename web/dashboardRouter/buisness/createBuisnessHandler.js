const { createBuisness } = require('../../../service/buisnessService');

async function handler(req) {
    try {
        const user = {
            CompanyID : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
            SDGGoals : req.body.answers.find(x => x.field.id === 'h3MZWNCqPzTg').choices.labels,
            SDG_Imp : req.body.answers.find(x => x.field.id === 'L8oVgqmegDtF').choice.label,
            // if impact plays anyrole role is selected
            // impact vision yes/no
            // if impact vision yes tell impact vision
            ImpactVision : req.body.answers.find(x => x.field.id === 'xjJMXXWHr2p0').boolean,
            ImpactVision_Desc : req.body.answers.find(x => x.field.id === '38JUvMNPozmi').text,

            Strategy : req.body.answers.find(x => x.field.id === 'HVtT2vpPcl1m').boolean,
            Help_Build_one : req.body.answers.find(x => x.field.id === 'CryTWguRD9Wd').true,
            CEO_Women : req.body.answers.find(x => x.field.id === 'OS3ZLAIg2IGr').choice.label,
            NoOfWomen : req.body.answers.find(x => x.field.id === 'xub3EblfV63M').choice.label,
            CEO_Africa : req.body.answers.find(x => x.field.id === 'U1OVpll7KvUg').boolean,
            NoOfAfrica : req.body.answers.find(x => x.field.id === '6tcdKmbSPRxX').choice.label,


            //Company Compliance
            License_Regulation : req.body.answers.find(x => x.field.id === 'Fnee8RNIVDCN').choice.label,

            License_Desc : req.body.answers.find(x => x.field.id === 'c9lgRcVqLPnk').text,
            Country : req.body.answers.find(x => x.field.id === 'u2EdGnDU5xT9').text,

            SecondLicense : req.body.answers.find(x => x.field.id === 'o9hwc9W7CqAm').boolean,
            SecondLicense_Desc : req.body.answers.find(x => x.field.id === 's5IG6Lt8yOBb').text,
            SecondLicense_Country : req.body.answers.find(x => x.field.id === 'eTUdLtNZxRwE').text,

            Anyother_license : req.body.answers.find(x => x.field.id === '4xRkrwtR7jEc').boolean,
            ThirdLicense_Desc : req.body.answers.find(x => x.field.id === 'grTYdgveX1mt').text,
            ThirdLicense_Country : req.body.answers.find(x => x.field.id === 'o25EP2oxzA6X').text,


            Desc_regulation : req.body.answers.find(x => x.field.id === 'eAwm17gMCSRr').text,
            FromWhichGovtDepoartment_regulation  : req.body.answers.find(x => x.field.id === 'nencx5FcVpXG').text,

            Second_regulation : req.body.answers.find(x => x.field.id === 'ehku9gvd0Wl8').boolean,
            Second_regul_desc : req.body.answers.find(x => x.field.id === 'BlJblmeIO4ZF').text,
            FromWhichGovtDepoartment_Secondregulation  : req.body.answers.find(x => x.field.id === 'zNBHsxIm75dJ').text,

            Third_regulation : req.body.answers.find(x => x.field.id === 'wiDr7y1d5JiA').boolean,
            Third_regul_desc : req.body.answers.find(x => x.field.id === '0f0uFTpkXsJj').text,
            FromWhichGovtDepoartment_Thirdregulation  : req.body.answers.find(x => x.field.id === 'TGddw5wA2fZn').text,




           //Buisness info

            Buisness_model : req.body.answers.find(x => x.field.id === 'JMbQrtrNsL1W').choices.labels,
            OtherBuisnessModel : req.body.answers.find(x => x.field.id === 'Isu33wtt624c').text,
            Revenue_model : req.body.answers.find(x => x.field.id === 'pvR3o3Sn2LHb').text,
            Buisness_vision : req.body.answers.find(x => x.field.id === '9F8LsZQPCFpG').text,
            Buisness_milestones : req.body.answers.find(x => x.field.id === '7Vowz0tvW2SX').text,
            Strength_Type  : req.body.answers.find(x => x.field.id === 'LiHXfYCTd9oC').text,
            Weakness_Type : req.body.answers.find(x => x.field.id === 'XGr0aNk2y0Xc').text,


            // Share holders

            ShareHolderAgreement : req.body.answers.find(x => x.field.id === 'MUNkWUslZLvJ').boolean,

            ShareHolderName : req.body.answers.find(x => x.field.id === 'GTe4DbIb0JtR').text,
            ShareHolderPercentage : req.body.answers.find(x => x.field.id === 'xEjBfQzx3ZXt').number,

            SecondShareHolder : req.body.answers.find(x => x.field.id === 'g1fwWVsU3vw5').boolean,
            SecondShareHolderName : req.body.answers.find(x => x.field.id === 'lUbZz7QHwcCF').text,
            SecondShareHolderPercentage : req.body.answers.find(x => x.field.id === 'pLYDxG6mcVCz').number,

            ThirdShareHolder : req.body.answers.find(x => x.field.id === 'QG5rdP7XcliB').boolean,
            ThirdShareHolderName : req.body.answers.find(x => x.field.id === 'LvkeM5snydcO').text,
            ThirdShareHolderPercentage : req.body.answers.find(x => x.field.id === 'pwiSKph6IvsS').number,

            FourthdShareHolder : req.body.answers.find(x => x.field.id === 'Ro77LjGyRu7p').boolean,
            FourthShareHolderName : req.body.answers.find(x => x.field.id === 'Ltc8tLwtirKq').text,
            FourthShareHolderPercentage : req.body.answers.find(x => x.field.id === '8lh4xWC4sqf7').number,



            FifthdShareHolder : req.body.answers.find(x => x.field.id === 'fSc2MM6RiXrz').boolean,
            FifthShareHolderName : req.body.answers.find(x => x.field.id === '13YR964A6Zv6').text,
            FifthShareHolderPercentage : req.body.answers.find(x => x.field.id === 'lCMko5mW3x9m').number,



            SixthdShareHolder : req.body.answers.find(x => x.field.id === 'pOD6yYqe5QNP').boolean,
            SixthShareHolderName : req.body.answers.find(x => x.field.id === 'g5sj4qamoacd').text,
            SixthShareHolderPercentage : req.body.answers.find(x => x.field.id === '8O9GkXx1uQo0').number,


            FirstExEmployeeSharesBool : req.body.answers.find(x => x.field.id === 'hx4KZcYqeHhq').boolean,
            FirstExployeeName : req.body.answers.find(x => x.field.id === 'yhKVTwzbIB9g').text,
            FirstExEmployeePosition : req.body.answers.find(x => x.field.id === 'jjDlz2CorCvR').text,
            FirstExEmployeeShares : req.body.answers.find(x => x.field.id === 'aLV0JGCUvwJ2').number,
            ElaborateVestedShares : req.body.answers.find(x => x.field.id === 'qjQw3xqjMqrR').text,



            SecondExEmployeeSharesBool : req.body.answers.find(x => x.field.id === 'FsSXUUDsohoH').boolean,
            SecondExEMployeeName : req.body.answers.find(x => x.field.id === '8Fgm9y2z8ROv').text,
            SecondExEmployeePosition : req.body.answers.find(x => x.field.id === 'rObP8blTc0x0').text,
            SecondExEmployeeShares : req.body.answers.find(x => x.field.id === '85BAc0WTX483').number,
            ElaborateVestedShares2 : req.body.answers.find(x => x.field.id === 'fZ9nKtFfveJf').text,

            ThirddExEmployeeSharesBool : req.body.answers.find(x => x.field.id === '346CbrY5mybG').boolean,
            ThirdExEmployeeName : req.body.answers.find(x => x.field.id === 'Ornh9XcR6MR9').text,
            ThirdExEmployeePosition : req.body.answers.find(x => x.field.id === 'wzHMOBi75Ry7').text,
            ThirdExEmployeeShares : req.body.answers.find(x => x.field.id === 'z37PuIfgivaN').number,
            ElaborateVestedShares3 : req.body.answers.find(x => x.field.id === 'e4IBwMQCVLzr').text,




        
        }

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
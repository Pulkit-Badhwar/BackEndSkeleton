const { createBuisness } = require('../../../service/buisnessService');

async function handler(req) {
    try {
        const user = {
            CompanyID : req.body.answers.find(x => x.field.id === 'XuEuRrLKTqxa').text,
            SDGGoals : req.body.answers.find(x => x.field.id === 'h3MZWNCqPzTg').choices.labels,
            SDG_Imp : req.body.answers.find(x => x.field.id === 'L8oVgqmegDtF').choice.label,
            ImpactVision : req.body.answers.find(x => x.field.id === 'xjJMXXWHr2p0') ? req.body.answers.find(x => x.field.id === 'xjJMXXWHr2p0').boolean  : null,
            ImpactVision_Desc : req.body.answers.find(x => x.field.id === '38JUvMNPozmi') ? req.body.answers.find(x => x.field.id === '38JUvMNPozmi').text  : null,

            Strategy : req.body.answers.find(x => x.field.id === 'HVtT2vpPcl1m').boolean,
            Help_Build_one : req.body.answers.find(x => x.field.id === 'CryTWguRD9Wd').boolean,
            CEO_Women : req.body.answers.find(x => x.field.id === 'OS3ZLAIg2IGr').choice.label,
            NoOfWomen : req.body.answers.find(x => x.field.id === 'xub3EblfV63M').choice.label,
            CEO_Africa : req.body.answers.find(x => x.field.id === 'U1OVpll7KvUg').boolean,
            NoOfAfrica : req.body.answers.find(x => x.field.id === '6tcdKmbSPRxX').choice.label,


            //Company Compliance
            License_Regulation : req.body.answers.find(x => x.field.id === 'Fnee8RNIVDCN').choice.label,

            License_Desc : req.body.answers.find(x => x.field.id === 'c9lgRcVqLPnk') ? req.body.answers.find(x => x.field.id === 'c9lgRcVqLPnk').text : null,
            Country : req.body.answers.find(x => x.field.id === 'u2EdGnDU5xT9') ? req.body.answers.find(x => x.field.id === 'u2EdGnDU5xT9').text : null,

            SecondLicense : req.body.answers.find(x => x.field.id === 'o9hwc9W7CqAm') ? req.body.answers.find(x => x.field.id === 'o9hwc9W7CqAm').boolean  : null,
            SecondLicense_Desc : req.body.answers.find(x => x.field.id === 's5IG6Lt8yOBb') ? req.body.answers.find(x => x.field.id === 's5IG6Lt8yOBb').text : null,
            SecondLicense_Country : req.body.answers.find(x => x.field.id === 'eTUdLtNZxRwE') ? req.body.answers.find(x => x.field.id === 'eTUdLtNZxRwE').text  : null,

            Anyother_license : req.body.answers.find(x => x.field.id === '4xRkrwtR7jEc') ? req.body.answers.find(x => x.field.id === '4xRkrwtR7jEc').boolean : null,
            ThirdLicense_Desc : req.body.answers.find(x => x.field.id === 'grTYdgveX1mt') ? req.body.answers.find(x => x.field.id === 'grTYdgveX1mt').text  : null,
            ThirdLicense_Country : req.body.answers.find(x => x.field.id === 'o25EP2oxzA6X') ? req.body.answers.find(x => x.field.id === 'o25EP2oxzA6X').text : null,


            Desc_regulation : req.body.answers.find(x => x.field.id === 'eAwm17gMCSRr') ? req.body.answers.find(x => x.field.id === 'eAwm17gMCSRr').text  : null,
            FromWhichGovtDepoartment_regulation  : req.body.answers.find(x => x.field.id === 'nencx5FcVpXG') ? req.body.answers.find(x => x.field.id === 'nencx5FcVpXG').text : null,

            Second_regulation : req.body.answers.find(x => x.field.id === 'ehku9gvd0Wl8') ? req.body.answers.find(x => x.field.id === 'ehku9gvd0Wl8').boolean  : null,
            Second_regul_desc : req.body.answers.find(x => x.field.id === 'BlJblmeIO4ZF') ? req.body.answers.find(x => x.field.id === 'BlJblmeIO4ZF').text : null,
            FromWhichGovtDepoartment_Secondregulation  : req.body.answers.find(x => x.field.id === 'zNBHsxIm75dJ') ? req.body.answers.find(x => x.field.id === 'zNBHsxIm75dJ').text : null,

            Third_regulation : req.body.answers.find(x => x.field.id === 'wiDr7y1d5JiA') ? req.body.answers.find(x => x.field.id === 'wiDr7y1d5JiA').boolean : null,
            Third_regul_desc : req.body.answers.find(x => x.field.id === '0f0uFTpkXsJj') ? req.body.answers.find(x => x.field.id === '0f0uFTpkXsJj').text  : null,
            FromWhichGovtDepoartment_Thirdregulation  : req.body.answers.find(x => x.field.id === 'TGddw5wA2fZn') ? req.body.answers.find(x => x.field.id === 'TGddw5wA2fZn').text  : null,




           //Buisness info

            Buisness_model : req.body.answers.find(x => x.field.id === 'JMbQrtrNsL1W').choices.labels,
            OtherBuisnessModel : req.body.answers.find(x => x.field.id === 'Isu33wtt624c') ? req.body.answers.find(x => x.field.id === 'Isu33wtt624c').text  : null,
            Revenue_model : req.body.answers.find(x => x.field.id === 'pvR3o3Sn2LHb').text,
            Buisness_vision : req.body.answers.find(x => x.field.id === '9F8LsZQPCFpG').text,
            Buisness_milestones : req.body.answers.find(x => x.field.id === '7Vowz0tvW2SX').text,
            Strength_Type  : req.body.answers.find(x => x.field.id === 'LiHXfYCTd9oC').text,
            Weakness_Type : req.body.answers.find(x => x.field.id === 'XGr0aNk2y0Xc').text,


            // Share holders

            ShareHolderAgreement : req.body.answers.find(x => x.field.id === 'MUNkWUslZLvJ').boolean,
            ShareHolderName : req.body.answers.find(x => x.field.id === 'GTe4DbIb0JtR') ? req.body.answers.find(x => x.field.id === 'GTe4DbIb0JtR').text : null,
            ShareHolderPercentage : req.body.answers.find(x => x.field.id === 'xEjBfQzx3ZXt') ? req.body.answers.find(x => x.field.id === 'xEjBfQzx3ZXt').number  : null,

            SecondShareHolder : req.body.answers.find(x => x.field.id === 'g1fwWVsU3vw5') ?  req.body.answers.find(x => x.field.id === 'g1fwWVsU3vw5').boolean  : null,
            SecondShareHolderName : req.body.answers.find(x => x.field.id === 'lUbZz7QHwcCF') ? req.body.answers.find(x => x.field.id === 'lUbZz7QHwcCF').text  : null,
            SecondShareHolderPercentage : req.body.answers.find(x => x.field.id === 'pLYDxG6mcVCz') ? req.body.answers.find(x => x.field.id === 'pLYDxG6mcVCz').number : null,

            ThirdShareHolder : req.body.answers.find(x => x.field.id === 'QG5rdP7XcliB') ? req.body.answers.find(x => x.field.id === 'QG5rdP7XcliB').boolean : null,
            ThirdShareHolderName : req.body.answers.find(x => x.field.id === 'LvkeM5snydcO') ? req.body.answers.find(x => x.field.id === 'LvkeM5snydcO').text  : null,
            ThirdShareHolderPercentage : req.body.answers.find(x => x.field.id === 'pwiSKph6IvsS') ? req.body.answers.find(x => x.field.id === 'pwiSKph6IvsS').number  : null,

            FourthdShareHolder : req.body.answers.find(x => x.field.id === 'Ro77LjGyRu7p') ? req.body.answers.find(x => x.field.id === 'Ro77LjGyRu7p').boolean  : null,
            FourthShareHolderName : req.body.answers.find(x => x.field.id === 'Ltc8tLwtirKq') ? req.body.answers.find(x => x.field.id === 'Ltc8tLwtirKq').text  : null,
            FourthShareHolderPercentage : req.body.answers.find(x => x.field.id === '8lh4xWC4sqf7') ? req.body.answers.find(x => x.field.id === '8lh4xWC4sqf7').number  : null,

            FifthdShareHolder : req.body.answers.find(x => x.field.id === 'fSc2MM6RiXrz') ? req.body.answers.find(x => x.field.id === 'fSc2MM6RiXrz').boolean  : null,
            FifthShareHolderName : req.body.answers.find(x => x.field.id === '13YR964A6Zv6') ? req.body.answers.find(x => x.field.id === '13YR964A6Zv6').text : null,
            FifthShareHolderPercentage : req.body.answers.find(x => x.field.id === 'lCMko5mW3x9m') ? req.body.answers.find(x => x.field.id === 'lCMko5mW3x9m').number : null,

            SixthdShareHolder : req.body.answers.find(x => x.field.id === 'pOD6yYqe5QNP') ? req.body.answers.find(x => x.field.id === 'pOD6yYqe5QNP').boolean  : null,
            SixthShareHolderName : req.body.answers.find(x => x.field.id === 'g5sj4qamoacd') ? req.body.answers.find(x => x.field.id === 'g5sj4qamoacd').text : null,
            SixthShareHolderPercentage : req.body.answers.find(x => x.field.id === '8O9GkXx1uQo0').number ? req.body.answers.find(x => x.field.id === '8O9GkXx1uQo0').number : null,



            FirstExEmployeeSharesBool : req.body.answers.find(x => x.field.id === 'hx4KZcYqeHhq').boolean,
            FirstExployeeName : req.body.answers.find(x => x.field.id === 'yhKVTwzbIB9g') ? req.body.answers.find(x => x.field.id === 'yhKVTwzbIB9g').text : null,
            FirstExEmployeePosition : req.body.answers.find(x => x.field.id === 'jjDlz2CorCvR') ? req.body.answers.find(x => x.field.id === 'jjDlz2CorCvR').text   : null,
            FirstExEmployeeShares : req.body.answers.find(x => x.field.id === 'aLV0JGCUvwJ2') ? req.body.answers.find(x => x.field.id === 'aLV0JGCUvwJ2').number  : null,
            ElaborateVestedShares : req.body.answers.find(x => x.field.id === 'qjQw3xqjMqrR') ? req.body.answers.find(x => x.field.id === 'qjQw3xqjMqrR').text  : null,

            SecondExEmployeeSharesBool : req.body.answers.find(x => x.field.id === 'FsSXUUDsohoH') ? req.body.answers.find(x => x.field.id === 'FsSXUUDsohoH').boolean  : null,
            SecondExEMployeeName : req.body.answers.find(x => x.field.id === '8Fgm9y2z8ROv') ? req.body.answers.find(x => x.field.id === '8Fgm9y2z8ROv').text : null,
            SecondExEmployeePosition : req.body.answers.find(x => x.field.id === 'rObP8blTc0x0') ? req.body.answers.find(x => x.field.id === 'rObP8blTc0x0').text  : null,
            SecondExEmployeeShares : req.body.answers.find(x => x.field.id === '85BAc0WTX483') ? req.body.answers.find(x => x.field.id === '85BAc0WTX483').number   : null,
            ElaborateVestedShares2 : req.body.answers.find(x => x.field.id === 'fZ9nKtFfveJf') ? req.body.answers.find(x => x.field.id === 'fZ9nKtFfveJf').text  : null,

            ThirddExEmployeeSharesBool : req.body.answers.find(x => x.field.id === '346CbrY5mybG') ? req.body.answers.find(x => x.field.id === '346CbrY5mybG').boolean  : null,
            ThirdExEmployeeName : req.body.answers.find(x => x.field.id === 'Ornh9XcR6MR9') ?  req.body.answers.find(x => x.field.id === 'Ornh9XcR6MR9').text  : null,
            ThirdExEmployeePosition : req.body.answers.find(x => x.field.id === 'wzHMOBi75Ry7') ? req.body.answers.find(x => x.field.id === 'wzHMOBi75Ry7').text  : null,
            ThirdExEmployeeShares : req.body.answers.find(x => x.field.id === 'z37PuIfgivaN') ? req.body.answers.find(x => x.field.id === 'z37PuIfgivaN').number : null,
            ElaborateVestedShares3 : req.body.answers.find(x => x.field.id === 'e4IBwMQCVLzr') ? req.body.answers.find(x => x.field.id === 'e4IBwMQCVLzr').text : null,        
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
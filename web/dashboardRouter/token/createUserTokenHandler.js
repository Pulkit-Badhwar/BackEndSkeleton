const { createUserToken, updateTokenByEmail } = require('../../../service/tokenService');
const moment = require('moment');
var fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');

async function handler(req) {
    const currentDate = new Date(Date.now());
    try {
        const user = {
            email : req.body.email,
            tokenName : req.body.tokenName,
            publishedDate : moment(currentDate, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
            claimed : "true"
        }
        const userData = await createUserToken(user);
        updateTokenByEmail(user);

        const csv = new ObjectsToCsv([user])

        await csv.toDisk(`/Users/pulkitbadhwar/Desktop/work/MetaOrigin/ImpactRooms/impactBackend/web/dashboardRouter/token/userTokenFiles/${user.tokenName+user.email}.csv`)

        return userData;
    } catch (err) {
        throw err;
    }
}

function createUserTokenHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createUserTokenHandler;
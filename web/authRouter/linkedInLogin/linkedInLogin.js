const { createClientTracker } = require('../../../service/clientTrackerService');
const { generateToken } = require('../../../utils/TokenManagerUtils')
const moment = require('moment');
const config = require('nconf');

async function handler(req) {
    const currentDate = new Date(Date.now());
    const expiryTime = new Date(Date.now() + (config.get('JWT_TOKEN_TIME') * 1000));
    try {
        const token = generateToken(req.body.email);
        const client = {
            email: req.body.email,
            token: token,
            time: moment(currentDate, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
            expiry_time: moment(expiryTime, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
            status: 'active',
        };
        const data = await createClientTracker(client);
        let obj = {
            data : data,
            token : client.token
        }
        return obj;
    } catch (err) {
        throw err;
    }
}

function linkedInLogin(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = linkedInLogin;
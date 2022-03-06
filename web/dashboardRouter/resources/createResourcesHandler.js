const createResources = require('../../../service/resourceService/createResource');
const moment = require('moment');

async function handler(req) {
    const currentDate = new Date(Date.now());
    try {
        const email = req.body.email;
        const user = {
            author : req.body.author,
            publishedDate : moment(currentDate, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
            department : req.body.department,
            subject : req.body.subject,
            topic : req.body.topic,
            description : req.body.description,
        }
        const userData = await createResources(user, email);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createResourcesHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createResourcesHandler;
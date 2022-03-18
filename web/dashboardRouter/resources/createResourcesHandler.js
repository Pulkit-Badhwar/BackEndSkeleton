const { createResource, fetchResourcesByTopic, fetchResourcesByEmail } = require('../../../service/resourceService');
const moment = require('moment');
const Boom = require('boom');

async function handler(req) {
    const currentDate = new Date(Date.now());
    try {
        const email = req.body.email;

        const data = await fetchResourcesByEmail(req.body.email);
        if(data[0]?.topic != req.body.topic && data[1]?.topic != req.body.topic){
        const user = {
            author : req.body.author,
            publishedDate : moment(currentDate, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
            department : req.body.department,
            subject : req.body.subject,
            topic : req.body.topic,
            description : req.body.description,
        }
        const userData = await createResource(user, email);
        return userData;
    }
    else{
        throw Boom.badRequest('Resource already exists');

    }

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
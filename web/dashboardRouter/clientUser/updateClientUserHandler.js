const Boom = require('boom');
const Joi = require('joi');

const { updateClientUser } = rootRequire('service/clientUserService');

const schema = Joi.object({
    name: Joi.string().min(2).optional(),
    organization: Joi.string().min(2).optional(),
    email: Joi.string().min(5).required(),
    phone: Joi.number().min(8).optional(),
});

async function handler(req) {
    const { error } = schema.validate(req.body);
    if (error) throw Boom.badRequest(error);
    const { email } = req.body;
    const bodyFields = Object.keys(req.body);
    logger.info(`updateClientUserHandler :: BodyField : ${JSON.stringify(bodyFields)}`);

    let i = 0;
    for (i = 0; i < bodyFields.length; i += 1) {
        if (bodyFields[i] === 'password') {
            logger.error(`UpdateClientUser :: ${email} :: Password :: not allowed`);
            throw Boom.badRequest('Password cannot be updated here');
        }
    }

    const data = await updateClientUser(req.body, email);
    logger.info(`UpdateClientUserHandler :: response data : ${JSON.stringify(data)}`);
    return data;

}

function updateClientUserHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = updateClientUserHandler;
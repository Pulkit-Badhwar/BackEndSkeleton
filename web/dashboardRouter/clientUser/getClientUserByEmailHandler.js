const Joi = require('joi');
const Boom = require('boom');

const { getClientUserByEmail } = rootRequire('service/clientUserService');

const schema = Joi.object({
  email: Joi.string().min(5).required(),
});

async function handler(req) {
  const { error } = schema.validate(req.query);
  if (error) throw Boom.badRequest('Invalid Request');

  const client = req.query.email;
  logger.info(JSON.stringify(client));
  const data = await getClientUserByEmail(client);
  return data;
}

function getClientUserByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = getClientUserByEmailHandler;
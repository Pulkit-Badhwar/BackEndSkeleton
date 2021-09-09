const Joi = require('joi');
const Boom = require('boom');

const { findClientTracker } = rootRequire('service/clientTrackerService');

const schema = Joi.object({
  email: Joi.string().min(5).required(),
});

async function handler(req) {
  const { error } = schema.validate(req.query);
  if (error) throw Boom.badRequest('Invalid Request');
  const { email } = req.query;
  const data = await findClientTracker(email);
  return data;
}

function findClientTrackerHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = findClientTrackerHandler;
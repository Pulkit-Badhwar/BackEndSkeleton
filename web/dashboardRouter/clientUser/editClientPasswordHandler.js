const Boom = require('boom');
const Joi = require('joi');

/* eslint-disable no-useless-catch */
const { updateClientUser, getClientUserByEmail } = rootRequire('service/clientUserService');

const schema = Joi.object({
  email: Joi.string().min(5).required(),
  currentPassword: Joi.string().min(5).required(),
  newPassword: Joi.string().min(5).required(),
});

async function handler(req) {

  try {
    const { error } = schema.validate(req.body);
    if (error) throw Boom.badRequest('Invalid Request');

    const clientEmail = req.body.email;

    logger.info(`editPasswordHandler :: client ${JSON.stringify(clientEmail)}`);
    const data = await getClientUserByEmail(clientEmail);
    if (!data.length) {
      throw Boom.badRequest('User does not exist, cannot updated');
    }
    const user = data[0];
    if (user.password === req.body.currentPassword) {
      logger.info('editPasswordHandler :: Password Verified');
      const updateObj = { password: req.body.newPassword };
      const updateResult = await updateClientUser(updateObj, req.body.email);
      logger.info(`editPasswordHandler :: Result :: ${JSON.stringify(updateResult)}`);
      return updateResult;
    }

    logger.info('editPasswordHandler :: Password Incorrect');
    throw Boom.badRequest('Password incorrect, cannot be updated');
  } catch (err) {
    throw err;
  }
}

function editClientPasswordHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = editClientPasswordHandler;
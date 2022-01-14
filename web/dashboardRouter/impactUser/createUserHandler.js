/* eslint-disable no-useless-catch */
const { createUser } = require('../../../service/impactUserService')

async function handler(req) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
  };
    const result = await createUser(user);
    return result;
}

function createUserHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = createUserHandler;
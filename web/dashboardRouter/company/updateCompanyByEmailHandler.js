const { updateCompanyByEmail } = require('../../../service/companyService');

async function handler(req) {
  try {
    const user = {
        Description : req.body.Description,
        email : req.body.email,
    }
    const userData = await updateCompanyByEmail(user);
    return userData;
  } catch (err) {
    throw err;
  }
}

function updateCompanyByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = updateCompanyByEmailHandler;
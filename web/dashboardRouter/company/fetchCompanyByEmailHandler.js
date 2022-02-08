const { fetchCompanyByEmail } = require('../../../service/companyService');

async function handler(req) {
  try {
    const email = req.query.email;
    const userData = await fetchCompanyByEmail(email);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchCompanyByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchCompanyByEmailHandler;
const { fetchOrganisationByEmail } = require('../../../service/organizationService');

async function handler(req) {
  try {
    const email = req.query.email;
    const userData = await fetchOrganisationByEmail(email);
    return userData;
  } catch (err) {
    throw err;
  }
}

function fetchOrganisationByEmailHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data : data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchOrganisationByEmailHandler;
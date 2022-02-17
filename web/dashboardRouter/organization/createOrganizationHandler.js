const { createOrganization } = require('../../../service/organizationService');

async function handler(req) {
    try {
        
        const userData = await createOrganization(user);
        return userData;
    } catch (err) {
        throw err;
    }
}

function createOrganizationHandler(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = createOrganizationHandler;
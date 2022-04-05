/* eslint-disable no-useless-catch */
const { inActiveUserTracker } = require('../../../service/userTrackerService')

async function handler(req) {
  try {
    const token  = req.body.token;
    logger.info(`LogoutClientUser :: ${JSON.stringify(token)}`);
    // const result = redis.del(token, async (err, response) => {
    //   if (response) {
    //     logger.info('LogoutClientHandler :: Logged Out successfully');
    //     await inActiveClientTracker(token);
    //     return 'User LoggedOut Successfully';
    //   }
    //   logger.info('LogoutClientHandler :: Error in logging out');
    //   return 'Error during Logout';
    // });

    const result = await inActiveUserTracker(token);
    return result;
  } catch (err) {
    throw err;
  }
}

function logoutClientHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = logoutClientHandler;
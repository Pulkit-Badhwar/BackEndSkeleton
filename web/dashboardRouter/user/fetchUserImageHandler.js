const Boom = require('boom');

const { fetchUserImage } = require('../../../service/impactUserService');
const { getS3FileStream } = require('../../../utils/s3Utils');


async function fetchUserImageHandler(req, res, next) {
  try {
    const email = req.query.email;
    const resultArr = await fetchUserImage(email);

    if (resultArr.length === 0) throw Boom.badRequest('Link is Invalid');
    const response = resultArr[resultArr.length-1];
    const s3Stream = await getS3FileStream(response.s3key);
    res.setHeader('Content-Type', 'image/jpeg');
    s3Stream.pipe(res);
  } catch (err) {
    logger.error(`serveFileS3 :: error :: ${err}`);
    next(err);
  }
}

module.exports = fetchUserImageHandler;
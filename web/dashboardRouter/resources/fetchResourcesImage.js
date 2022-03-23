const Boom = require('boom');

const { fetchResourcesByTopic } = require('../../../service/resourceService');
const { getS3FileStream } = require('../../../utils/s3Utils');


async function fetchResourcesImage(req, res, next) {
  try {
    const topic = req.query.topic;
    const resultArr = await fetchResourcesByTopic(topic);

    if (resultArr.length === 0) throw Boom.badRequest('Link is Invalid');
    const response = resultArr[0];
    const s3Stream = await getS3FileStream(response.s3key);
    res.setHeader('Content-Type', 'image/png');
    s3Stream.pipe(res);
  } catch (err) {
    logger.error(`serveFileS3 :: error ::  ${err}`);
    next(err);
  }
}

module.exports = fetchResourcesImage;
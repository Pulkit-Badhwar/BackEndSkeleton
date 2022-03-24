const Boom = require('boom');

const { fetchResourcesByTopic } = require('../../../service/resourceService');
const { getS3FileStream } = require('../../../utils/s3Utils');


async function fetchFileByTopic(req, res, next) {
  try {
    const topic = req.query.topic;
    const resultArr = await fetchResourcesByTopic(topic);

    if (resultArr.length === 0) throw Boom.badRequest('Link is Invalid');
    const response = resultArr[0];
    const s3Stream = await getS3FileStream(response.fileLink);
    res.setHeader('Content-Type', 'application/pdf');
    s3Stream.pipe(res);
  } catch (err) {
    logger.error(`serveFileS3 :: error ::  ${err}`);
    next(err);
  }
}

module.exports = fetchFileByTopic;
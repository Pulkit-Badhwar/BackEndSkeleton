const Boom = require('boom');

const fetchCompanyImage = require('../../../service/impactUserService/fetchCompanyImage');
const { getS3FileStream } = require('../../../utils/s3Utils');


async function fetchArchiveHandler(req, res, next) {
  try {
    logger.info(`serveFileS3 :: ${JSON.stringify(req.query)}`);
    const email = req.query.email;
    const resultArr = await fetchCompanyImage(email);

    if (resultArr.length === 0) throw Boom.badRequest('Link is Invalid');
    const response = resultArr[0];
    const s3Stream = await getS3FileStream(response.s3key);
    res.setHeader('Content-Type', 'image/jpeg');
    s3Stream.pipe(res);
  } catch (err) {
    logger.error(`serveFileS3 :: error :: documentId: ${req.query.document_id} :: ${err}`);
    next(err);
  }
}

module.exports = fetchArchiveHandler;
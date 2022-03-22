const Boom = require('boom');

const fetchCompanyLogo = require('../../../service/impactUserService/fetchCompanyLogo');
const { getS3FileStream } = require('../../../utils/s3Utils');


async function fetchCompanyLogoHandler(req, res, next) {
  try {
    const email = req.query.email;
    const resultArr = await fetchCompanyLogo(email);

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

module.exports = fetchCompanyLogoHandler;
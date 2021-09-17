const Boom = require('boom');

const { findArchiveById } = rootRequire('service/archiveReportService');
const { generateToken } = rootRequire('utils/TokenManagerUtils');


async function handler(req,res,next) {
  try {
    logger.info(`serveFileS3 :: request :: ${JSON.stringify(req.query)}`);
    logger.info(`get File : ${req.query.documentId}`);
    const archiveId = req.query.id;
    const string = req.user.email.concat(archiveId)
    console.log(string);
    const resultArr = await findArchiveById(archiveId);
    if (resultArr.length === 0) throw Boom.badRequest('Link is Invalid');
    const response = resultArr[0];
    const signature = generateToken(string);
    redis.set(signature, response.s3key);
    return signature;
    }
   catch (err) {
    logger.error(`serveFileS3 :: error :: documentId: ${req.query.documentId} :: ${err}`);
    next(err);
  }
}

function fetchArchiveByIdHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchArchiveByIdHandler;
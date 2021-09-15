const xss = require('xss');
const Boom = require('boom');
const Joi = require('joi');

const { findArchiveById, updateArchiveReport } = rootRequire('service/archiveReportService');
const { uploadToS3, deleteS3File } = rootRequire('utils/awsS3Utils');

async function updateArchive({ body, files, user }) {
  try {
    logger.info(`Update Object Body : ${JSON.stringify(body)}`);
    const archive = await findArchiveById(body.id);
    const updateObj = {};
    const bodyFields = Object.keys(body);
    logger.info(bodyFields);
    let i;
    for (i = 0; i < bodyFields.length; i += 1) {
      if (bodyFields[i] !== 'id') {
        updateObj[bodyFields[i]] = body[bodyFields[i]];
      }
    }
    logger.info(updateObj);

    if (files.length > 0) {
      logger.info(`KEY : ${archive[0].s3key}`);
      await deleteS3File(archive[0].s3key);
      await Promise.all(files.map(async (file) => {
        const result = await uploadToS3(file);

        // archive.file_location = result.Location;
        updateObj.originalFileName = file.originalname;
        updateObj.s3key = result.Key;
        updateObj.etag = result.ETag;
        updateObj.bucketName = result.Bucket;
      }));
    }

    logger.info(updateObj);

    const data = await updateArchiveReport(body.id, updateObj);
    return data;
  } catch (err) {
    logger.error(`updateArchive :: error :: Body :: ${JSON.stringify(body)} :: ${err}`);
    throw err;
  }
}

function updateArchiveReportHandler(req, res, next) {
  updateArchive(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch(err => next(err));
}

module.exports = updateArchiveReportHandler;
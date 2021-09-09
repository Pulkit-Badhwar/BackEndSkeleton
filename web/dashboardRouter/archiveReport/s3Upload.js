const Boom = require('boom');
const moment = require('moment');

const { uploadToS3 } = rootRequire('utils/awsS3Utils');
const { createArchiveReport } = rootRequire('service/archiveReportService');

async function makeArchive(files, body, user, s3Response) {
  const timeObj1 = Date.now();
  const timeObj2 = new Date(timeObj1);
  const archive = {
    category: body.category,
    report: body.report,
    publishDate: moment(body.publishDate).format('YYYY-MM-DD'),
    description: body.description,
    originalFileName: files[0].originalname,
    s3key: s3Response[0].s3key,
    etag: s3Response[0].eTag,
    bucketName: s3Response[0].bucket,
    createdBy: user.email,
    createdAt: moment(timeObj2, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
  };
  const result = await createArchiveReport(archive);
  if (result.affectedRows === 0) {
    throw Boom.expectationFailed('fail to upload');
  }
  return result;
}

async function uploadToS3util(files) {
  const s3Response = [];
  await Promise.all(files.map(async (file) => {
    const result = await uploadToS3(file);
    logger.info(`s3Upload :: upload file : ${file.path} :: result : ${JSON.stringify(result)}`);
    const val = {
      eTag: result.ETag,
      s3key: result.Key,
      bucket: result.Bucket,
      fileLocation: result.Location,
    };
    s3Response.push(val);
  }));
  return s3Response;
}

async function s3UploadHandler({ body, files, user }) {
  try {
    // logger.info(`s3UploadHandler :: ${JSON.stringify(body)}`);
    // logger.info(`s3UploadHandler :: ${JSON.stringify(files)}`);
    // logger.info(`s3Upload user :: ${JSON.stringify(user)}`);
    const s3Response = await uploadToS3util(files);
    await makeArchive(files, body, user, s3Response);
    return s3Response;
  } catch (err) {
    logger.error(`s3Upload :: error :: ${JSON.stringify(body)} :: ${err}`);
    throw err;
  }
}

function uploadHandler(req, res, next) {
  s3UploadHandler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch(err => next(err));
}

module.exports = uploadHandler;

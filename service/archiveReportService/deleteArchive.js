const { findById, removeById } = rootRequire('repo/mysql/archiveReportRepo');
const { deleteS3File } = rootRequire('utils/awsS3Utils');
const Boom = require('boom');

async function deleteArchive(archiveId) {
  const archiveList = await findById(archiveId);
  if (archiveList.length === 0) {
    throw Boom.badRequest('Archive Id not present');
  }

  const key = archiveList[0].s3key;
  const delResult = await deleteS3File(key);
  logger.info(`Delete File Result : ${JSON.stringify(delResult)}`);
  const result = await removeById(archiveId);
  return result;
}

module.exports = deleteArchive;
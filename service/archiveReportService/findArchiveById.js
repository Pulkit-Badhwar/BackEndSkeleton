/* eslint-disable no-useless-catch */
const { findById } = rootRequire('repo/mysql/archiveReportRepo');

async function findArchiveById(archiveId) {
  try {
    logger.info(`Archive : ${JSON.stringify(archiveId)}`);
    const data = await findById(archiveId);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = findArchiveById;

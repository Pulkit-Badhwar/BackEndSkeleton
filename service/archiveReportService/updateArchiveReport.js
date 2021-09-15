/* eslint-disable no-useless-catch */
const { update } = rootRequire('repo/mysql/archiveReportRepo');

async function updateArchiveReport(archiveId, updateObj) {
  try {
    logger.info(`Archive Report Update :: id : ${archiveId} :: obj : ${JSON.stringify(updateObj)}`);
    const data = await update(archiveId, updateObj);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = updateArchiveReport;

/* eslint-disable no-useless-catch */
const { save } = rootRequire('repo/mysql/archiveReportRepo');

async function createArchiveReport(archive) {
  try {
    logger.info(`Archive : ${JSON.stringify(archive)}`);
    const data = await save(archive);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = createArchiveReport;

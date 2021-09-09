/* eslint-disable no-useless-catch */
const { find, findByCategoryAndReportAndRangeWithPagination, findByCategoryAndReportWithPagination, findByCategoryAndRangeWithPagination, findByCategoryWithPagination, findByRangeWithPagination } = rootRequire('repo/mysql/archiveReportRepo');
const { countAllRecords, countByCategoryAndReportAndRange, countByCategoryAndReport, countByCategory, countByRange, countByCategoryAndRange } = rootRequire('repo/mysql/archiveReportRepo');

async function fetchArchiveReport(filter) {
  try {
    logger.info(`Filter : ${JSON.stringify(filter)}`);
    const pageSize = 10;
    const offset = filter.pageNumber * pageSize;
    let data = null;
    let recordCount = 0;
    

    if (filter.category === '' && filter.report === '' && filter.startDate === 'Invalid date') {
      data = await find (offset, pageSize);
      recordCount = await countAllRecords();
    }
    else if (filter.category !== '' && filter.report === '' && filter.startDate === 'Invalid date') {
      data = await findByCategoryWithPagination(filter.category, offset, pageSize);
      recordCount = await countByCategory(filter.category);
    }
    else if (filter.category === '' && filter.report === '' && filter.startDate !== 'Invalid date') {
      data = await findByRangeWithPagination(filter.startDate, filter.endDate, offset, pageSize);
      recordCount = await countByRange(filter.startDate, filter.endDate);
    }
    else if (filter.category !== '' && filter.report !== '' && filter.startDate === 'Invalid date') {
      data = await findByCategoryAndReportWithPagination(filter.category, filter.report, offset, pageSize);
      recordCount = await countByCategoryAndReport(filter.category, filter.report);
    }
    else if (filter.category !== '' && filter.report === '' && filter.startDate !== 'Invalid date') {
      data = await findByCategoryAndRangeWithPagination(filter.category, filter.startDate, filter.endDate, offset, pageSize);
      recordCount = await countByCategoryAndRange(filter.category, filter.startDate, filter.endDate);
    }
    else if (filter.category !== '' && filter.report !== '' && filter.startDate !== 'Invalid date') {
      data = await findByCategoryAndReportAndRangeWithPagination(filter.category, filter.report, filter.startDate, filter.endDate, offset, pageSize);
      recordCount = await countByCategoryAndReportAndRange(filter.category, filter.report, filter.startDate, filter.endDate);
    }

    const pageNo = Math.floor(recordCount[0].count/pageSize);
    const result = {
      records : data,
      maxPageNo : pageNo,
    }
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchArchiveReport;
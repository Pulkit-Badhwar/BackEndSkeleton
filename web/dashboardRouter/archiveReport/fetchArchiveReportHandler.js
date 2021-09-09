/* eslint-disable no-useless-catch */
const { fetchArchiveReport } = rootRequire('service/archiveReportService');

async function handler(req) {
  try {

    const filter = {
      category: req.query.category || '',
      report: req.query.report || '',
      startDate: req.query.startDate || 'Invalid date',
      endDate: req.query.endDate || new Date(),
      pageNumber: req.query.pageNumber || 0,
    }
    const filterData = await fetchArchiveReport(filter);
    return filterData;
  } catch (err) {
    throw err;
  }
}

function fetchArchiveReportHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = fetchArchiveReportHandler;
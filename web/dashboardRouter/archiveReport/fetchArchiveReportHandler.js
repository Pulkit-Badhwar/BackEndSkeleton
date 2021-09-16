/* eslint-disable no-useless-catch */
const { fetchArchiveReport, groupArchiveCategory } = rootRequire('service/archiveReportService');
const { fetchClientSubscription } = rootRequire('service/clientSubscriptionService');

async function handler(req) {
  try {
    let finalData = [];
    const statusData = await fetchClientSubscription(req.user.email);
    const groupData  = await groupArchiveCategory(statusData.active);
    for(let i = 0; i < groupData.length; i++){
      const filter = {
        category: groupData[i],
        report: req.query.report || '',
        startDate: req.query.startDate || 'Invalid date',
        endDate: req.query.endDate || new Date(),
        pageNumber: req.query.pageNumber || 0,
      }
      const filterData = await fetchArchiveReport(filter);
      finalData.push(filterData)
    }
    return finalData;

    // const filter = {
    //   category: req.query.groupData || '',
    //   report: req.query.report || '',
    //   startDate: req.query.startDate || 'Invalid date',
    //   endDate: req.query.endDate || new Date(),
    //   pageNumber: req.query.pageNumber || 0,
    // }


    // const filterData = await fetchArchiveReport(filter);
    // return filterData;
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
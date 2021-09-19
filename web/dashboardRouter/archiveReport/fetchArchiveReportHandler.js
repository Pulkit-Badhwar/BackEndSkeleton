const { fetchArchiveReport } = rootRequire('service/archiveReportService');
const { fetchClientSubscription } = rootRequire('service/clientSubscriptionService');
const categoryMap = rootRequire('enums/CategoryMap');

async function handler(req) {
  try {
    let finalData = {};
    const statusData = await fetchClientSubscription(req.user.email);
    const groupData = statusData.active.map(d => d.category);
    console.log(`catelist : ${JSON.stringify(groupData)}`);

    for(let j = 0; j < groupData.length; j++){
      const currentCategory = groupData[j];
      for (let k=0; k < categoryMap[currentCategory]['reports'].length; k++){
        const currentReport = categoryMap[currentCategory]['reports'][k];
        const filter = {
          category: currentCategory,
          report: currentReport,
          startDate: req.query.startDate || 'Invalid date',
          endDate: req.query.endDate || new Date(),
          pageNumber: req.query.pageNumber || 0,
        }
        const filterData = await fetchArchiveReport(filter);
        logger.info(`FilterData : report : ${currentReport} :: data : ${JSON.stringify(filterData)}`);
        finalData[currentReport] = filterData;
      }
    }
    return finalData;
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
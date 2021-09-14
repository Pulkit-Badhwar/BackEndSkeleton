const { groupArchiveCategory } = rootRequire('service/archiveReportService');

async function handler(){
    const clientData = await groupArchiveCategory();
    return clientData;
}

function groupArchiveCategoryHandler(req, res, next) {
    handler(req).then((data) => {
      res.json({
        success: true,
        data,
      });
    }).catch((err) => next(err));
  }

  module.exports = groupArchiveCategoryHandler;
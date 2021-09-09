const { deleteArchive } = rootRequire('service/archiveReportService');

async function handler(req) {
  const { archiveId } = req.body;
  const result = await deleteArchive(archiveId);
  return result;
}

function deleteArchiveHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch((err) => next(err));
}

module.exports = deleteArchiveHandler;
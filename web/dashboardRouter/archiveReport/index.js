const { uploadConfig } = require('../../middleware/multer');

const s3Upload = require('./s3Upload');
const fetchArchiveReportHandler = require('./fetchArchiveReportHandler');
const updateArchiveReportHandler = require('./updateArchiveReportHandler');
const deleteArchiveHandler = require('./deleteArchiveHandler');

module.exports = (router) => {
  router.post('/archiveReport/upload', uploadConfig, s3Upload);
  router.get('/archiveReport/fetch', fetchArchiveReportHandler);
  router.post('/archiveReport/update', uploadConfig, updateArchiveReportHandler);
  router.post('/archiveReport/delete', deleteArchiveHandler);
};
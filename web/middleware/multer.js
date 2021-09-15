const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const Boom = require('boom');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    logger.info (`File INFO : ${JSON.stringify(file)}`);
    const pathName = path.join(__dirname, '../../uploads');
    logger.info(`PathName : ${pathName}`);
    cb(null, pathName);
  },
  filename(req, file, cb) {
    logger.info (`File INFO : ${JSON.stringify(file)}`);
    const fileName = `${uuid()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  logger.info (`File INFO : ${JSON.stringify(file)}`);
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== '.pdf') {
    return cb(Boom.badRequest('Invalid file extension.'));
  }
  cb(null, true);
};

const uploadConfig = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1000 * 1000 }, // 5 MB limit
}).any();

module.exports = {
  uploadConfig,
};
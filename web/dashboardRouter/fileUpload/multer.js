const multer = require('multer');
const path = require('path');
const Boom = require('boom');

const storage = multer.diskStorage( {
  destination: function ( req, files, cb ) {
      cb( null, path.resolve( `uploads` ) )
  },
  filename: function ( req, file, cb ) {
      cb( null, file.originalname )
  }

} )
const uploadConfig = multer({ storage, }).any();


module.exports = {
  uploadConfig,
};

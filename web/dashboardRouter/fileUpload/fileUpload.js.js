const multer = require('multer');

const storage = multer.diskStorage( {
  destination: function ( req, files, cb ) {
      cb( null, '/Users/pulkitbadhwar/Desktop/work/MetaOrigin/ImpactRooms/impactBackend/uploads' )
  },
  filename: function ( req, file, cb ) {
      cb( null, 'balanceSheet' )
  }

} )
const uploadConfig = multer({ storage });


module.exports = {
  uploadConfig,
};

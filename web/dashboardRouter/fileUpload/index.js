const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/pulkitbadhwar/Desktop/work/MetaOrigin/ImpactRooms/impactBackend/uploads/profileUpload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })

module.exports = (router) => {
    router.post('/file/fileUpload', upload.fields([
        {
            name: 'file', maxCount: 1
        }, {
            name: 'file2', maxCount: 1
        }
        , {
            name: 'file3', maxCount: 1
        }
        , {
            name: 'file4', maxCount: 1
        }
        , {
            name: 'file5', maxCount: 1
        }
    ]), (req, res, next) => {
        res.send(JSON.stringify('file uploaded'));
    })
}


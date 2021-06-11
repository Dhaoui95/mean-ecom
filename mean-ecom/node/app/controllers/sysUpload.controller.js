var multer=require('multer');
var fs=require('fs');

//set STORAGE

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'.'+file.originalname.split(".")[1])
    }
  })
   
  exports.upload = multer({ storage: storage })
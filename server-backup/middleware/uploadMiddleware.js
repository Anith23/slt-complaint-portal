const multer = require("multer");
const path = require("path");


// Storage
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {

    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);

  }

});


// File Filter
const fileFilter = (req, file, cb) => {

  const allowedTypes =
    /pdf|doc|docx|jpg|jpeg|png/;

  const extname =
    allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

  if (extname) {
    return cb(null, true);
  }

  cb("Only PDF, DOCX, JPG, PNG allowed");

};


const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter
});

module.exports = upload;
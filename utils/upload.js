const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const newFileName = uniqueSuffix + "-" + file.originalname;
    req.body.profilePic = newFileName;
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

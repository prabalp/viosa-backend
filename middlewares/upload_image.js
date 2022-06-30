const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// const uploadImg = multer({ storage: storage }).single("image");

const uploadImg = multer({ storage: storage }).fields([
  { name: "thumnail", maxCount: 1 },
  { name: "vid", maxCount: 1 },
]);

// const uploadImg2 = multer({ storage: storage }).single("image2");
module.exports = {
  uploadImg,
};

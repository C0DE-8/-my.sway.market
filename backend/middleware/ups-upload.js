const multer = require("multer");

function fileFilter(req, file, cb) {
  const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
  if (!allowed.includes(file.mimetype)) {
    return cb(new Error("Only JPG, PNG, WEBP, or PDF allowed"), false);
  }
  cb(null, true);
}

const upsUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: { fileSize: 6 * 1024 * 1024 } // 6MB
});

module.exports = { upsUpload };

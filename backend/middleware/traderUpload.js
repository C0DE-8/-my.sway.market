const multer = require("multer");

function fileFilter(req, file, cb) {
  const allowed = ["image/jpeg", "image/png", "image/webp"];
  if (!allowed.includes(file.mimetype)) {
    return cb(new Error("Only JPG, PNG, WEBP images are allowed"), false);
  }
  cb(null, true);
}

const traderUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: { fileSize: 4 * 1024 * 1024 }, // 4MB
});

module.exports = { traderUpload };

const express = require("express");
const router = express.Router();

const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getReviews,
  createReview,
  updateReviews,
  deleteReview,
} = require("../controllers/reviewController");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (_, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.get("/", getReviews);
router.post("/", authMiddleware, upload.single("image"), createReview);
router.put("/:id", authMiddleware, upload.single("image"), updateReviews);
router.delete("/:id", authMiddleware, deleteReview);

module.exports = router;

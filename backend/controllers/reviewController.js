const Review = require("../models/Review");

async function createReview(req, res) {
  const { stars, title, studentsWatched } = req.body;
  const image = req.file?.filename;
  try {
    const review = await Review.create({
      image,
      stars,
      title,
      studentsWatched,
    });
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err });
  }
}

async function getReviews(req, res) {
  const reviews = await Review.find();
  res.json(reviews);
}

async function updateReviews(req, res) {
  const { id } = req.params;
  const { stars, title, studentsWatched } = req.body;
  const image = req.file?.filename;

  try {
    const updated = await Review.findByIdAndUpdate(
      id,
      { image, stars, title, studentsWatched },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err });
  }
}

async function deleteReview(req, res) {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
}

module.exports = { createReview, getReviews, updateReviews, deleteReview };

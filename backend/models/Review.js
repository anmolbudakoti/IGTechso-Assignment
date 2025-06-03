const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    image: String,
    stars: {
      type: Number,
      min: 1,
      max: 5,
    },
    title: String,
    studentsWatched: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);

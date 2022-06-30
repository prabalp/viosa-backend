const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  ratings: {
    type: Number,
  },
  about: {
    type: String,
  },
  courseContent: {
    type: String,
    // default: [],
  },
  price: {
    type: Number,
  },
  vidUrl: {
    type: String,
  },
  resourses: {
    type: String,
    // default: [],
  },
  user: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    required: true,
  },
  thumnailUrl: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Course", CourseSchema);

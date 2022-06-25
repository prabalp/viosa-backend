const Course = require("../models/courses");
const { successmessage, errormessage } = require("../middlewares/util");

module.exports.GetCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    if (!courses) {
      return res.status(400).json(errormessage("No courses found"));
    }
    return res.status(200).json(successmessage("Courses found", courses));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

module.exports.GetCoursebyId = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(400).json(errormessage("No course found"));
    }
    return res.status(200).json(successmessage("Course found", course));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

module.exports.AddCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    if (!course) {
      return res.status(400).json(errormessage("No course found"));
    }
    return res.status(200).json(successmessage("Course added", course));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

module.exports.SubscribeCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(400).json(errormessage("No course found"));
    }
    course.user.push(req.body.user_id);
    const updatedCourse = await course.save();
    return res
      .status(200)
      .json(successmessage("Course subscribed", updatedCourse));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

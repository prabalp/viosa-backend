const router = require("express").Router();
const {
  GetCourses,
  GetCoursebyId,
  AddCourse,
  SubscribeCourse,
} = require("../controllers/coursesController");

router.route("/getCourses").get(GetCourses);
router.route("/getCoursebyId/:id").get(GetCoursebyId);
router.route("/addCourse").post(AddCourse);
router.route("/subscribeCourse/:id").post(SubscribeCourse);

module.exports = router;

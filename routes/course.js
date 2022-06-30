const router = require("express").Router();
const {
  GetCourses,
  GetCoursebyId,
  AddCourse,
  SubscribeCourse,
} = require("../controllers/coursesController");
const upload = require("../middlewares/upload_image");

router.route("/getCourses").get(GetCourses);
router.route("/getCoursebyId/:id").get(GetCoursebyId);
router.route("/addCourse").post(upload.uploadImg, AddCourse);
router.route("/subscribeCourse/:id").post(SubscribeCourse);

module.exports = router;

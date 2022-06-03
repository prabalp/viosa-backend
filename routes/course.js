const router = require("express").Router();
const {
  GetCourses,
  GetCoursebyId,
} = require("../controllers/coursesController");

router.route("/").get(GetCourses);
router.route("/:id").get(GetCoursebyId);

module.exports = router;

const router = require("express").Router();
const { GetProfile, EditProfile } = require("../controllers/profileController");

router.route("/:id").get(GetProfile);
router.route("/edit/:id").put(EditProfile);

module.exports = router;

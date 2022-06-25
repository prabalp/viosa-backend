const router = require("express").Router();
const { GetCart } = require("../controllers/cartController");

router.route("/getCart/:id").get(GetCart);

module.exports = router;

const Cart = require("../models/cart");
const { successmessage, errormessage } = require("../middlewares/util");

modules.exports.GetCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res.status(400).json(errormessage("No cart found"));
    }
    return res.status(200).json(successmessage("Cart found", cart));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

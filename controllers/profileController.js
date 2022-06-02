const User = require("../models/user");
const { successmessage, errormessage } = require("../middlewares/util");

module.exports.GetProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json(errormessage("User does not exists"));
    }
    return res.status(200).json(successmessage("User found", user));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

module.exports.EditProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(400).json(errormessage("User does not exists"));
    }
    return res.status(200).json(successmessage("User updated", user));
  } catch (err) {
    return res.status(400).json(errormessage(err.message));
  }
};

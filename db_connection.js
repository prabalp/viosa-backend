const mongoose = require("mongoose");

const URL = process.env.MONGODB_URI;

exports.db_connect = async () => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // we need .then because
      //it returns a promise
      console.log("Database is connected...");
    })
    .catch((error) => {
      console.log("Error:", error.message);
    });
};

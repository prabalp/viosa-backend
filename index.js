const express = require("express");
const app = express();
const router = require("express").Router();

const bodyParser = require("body-parser");
const cors = require("cors");
const { db_connect } = require("./db_connection");

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

require("dotenv").config();
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const courseRouter = require("./routes/course");
const cartRouter = require("./routes/cart");

// router.use(express.static(__dirname + "/public/"));
app.use("/uploads", express.static("./uploads"));

//env var
const URL = process.env.MONGODB_URI;

//routes
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/course", courseRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("VIOSA API");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
  db_connect(URL);
});

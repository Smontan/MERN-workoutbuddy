require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/users")

// express app
const app = express();

// middelware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes)

// connect to the mongodb database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

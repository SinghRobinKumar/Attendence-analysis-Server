const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/index");

const App = express();

App.use(bodyParser.json());
App.use(cors());
// App.use(bodyParser.urlencoded({ extended: false }));

App.use("/", routes.router);

mongoose
  .connect(
    "mongodb+srv://test:test@cluster0.i8uak.mongodb.net/Student-Database?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => App.listen(8080))
  .catch((err) => console.log(err));

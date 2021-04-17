const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = new Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  isPresent: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Attendence", model);

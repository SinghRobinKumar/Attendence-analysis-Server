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
  attendence: [
    {
      present: { type: Boolean },
      date: { type: Date },
    },
  ],
});

module.exports = mongoose.model("Attendence", model);

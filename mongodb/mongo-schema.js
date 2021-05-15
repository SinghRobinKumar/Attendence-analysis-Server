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
      SemesterName: String,
      Subjects: [
        {
          SubjectName: String,
          Subject: {
            week1: [],
          },
        },
        // {
        //   SubjectName: String,
        //   Subject: {
        //     week1: [],
        //   },
        // },
        // {
        //   SubjectName: String,
        //   Subject: {
        //     week1: [],
        //   },
        // },
        // {
        //   SubjectName: String,
        //   Subject: {
        //     week1: [],
        //   },
        // },
      ],
    },
  ],
});

module.exports = mongoose.model("Test-Attendence", model);

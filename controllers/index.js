const Attendence = require("../mongodb/mongo-schema");

exports.new = (req, res, next) => {
  const name = "Robin Kumar Singh";
  const rno = "18CE13";
  const present = true;
  const date = new Date();

  const attendence = new Attendence({
    name: name,
    rollno: rno,
    attendence: [
      {
        SemesterName: "Semester 6",
        Subjects: [
          {
            SubjectName: "Computer Graphics",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Network Management",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Advanced Computer Architecture",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Software Engineering & Testing",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Cyber Law And Computer Forensic",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Business Communication",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 5",
        Subjects: [
          {
            SubjectName: "Internet Technology And Web Designing",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Security",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Entrepreneurship Development",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Data Structures using C",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "E-commerce",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 4",
        Subjects: [
          {
            SubjectName: "Microprocessor And it's Applications",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Database Management System",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Object Oriented Programming Through Java",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Operating Systems",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Data Communication And Computer Network",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Laboratory 2",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 3",
        Subjects: [
          {
            SubjectName: "Computer Hardware",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Programming Concepts Through C",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Organization",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Laboratory 1",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Basic Electrical Engineering",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Digital Electronics",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 2",
        Subjects: [
          {
            SubjectName: "Engineering Maths 2",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Applied Physics 2",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Environmental Studies",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Engineering Materials",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Basic Engineering Skills",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Fundamentals and Applications",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 1",
        Subjects: [
          {
            SubjectName: "Engineering Maths 1",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Applied Physics 1",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Applied Chemistry",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Engineering Drawing",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Communication Skills",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
    ],
  });

  attendence
    .save()
    .then((result) => {
      console.log("inserted Successfully");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.update = (req, res, next) => {
  // const rollno = req.body.rollno;
  const rollno = "18CE13";

  const id = "609410f713fce32565e5cac5";
  // const present = req.body.present;
  const present = true;
  // const date = req.body.date;
  const date = new Date();

  Attendence.findById(id)
    .then((record) => {
      const sem6 = "SEM6";
      const present = true;
      const date = new Date();
      record.attendence.push({
        SemesterName: "Semester 5",
      });
      record.attendence[0].Subjects[0].Subject.week1.push({
        present: present,
        date: date,
      });

      return record.save();
    })
    .then((result) => {
      console.log("Record Updated");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.list = (req, res, next) => {
  Attendence.find((err, data) => {
    if (!err) {
      res.status(200).json(data);
      // console.log(data);
    } else {
      console.log(err);
    }
  });
};

exports.singleRecord = async (req, res, next) => {
  console.log(req.query);
  const name = req.query.name;
  const data = await Attendence.findOne({ name: name });
  res.status(200).json(data);
};

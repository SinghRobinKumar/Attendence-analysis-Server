const Attendence = require("../mongodb/mongo-schema");

exports.new = (req, res, next) => {
  const name = "Urmila Naik";
  const rno = "14CE24";
  const present = true;
  const attendence = new Attendence({
    name: name,
    rollno: rno,
    attendence: present,
  });
  attendence
    .save()
    .then((result) => console.log("inserted Successfully"))
    .catch((err) => console.log(err));
};

exports.list = (req, res, next) => {
  Attendence.find((err, data) => {
    if (!err) {
      res.status(200).json(data);
      console.log(data);
    } else {
      console.log(err);
    }
  });
};

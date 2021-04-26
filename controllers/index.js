const Attendence = require("../mongodb/mongo-schema");

exports.new = (req, res, next) => {
  const name = "Urmila Naik";
  const rno = "14CE24";
  const present = true;
  const date = new Date();
  const attendence = new Attendence({
    name: name,
    rollno: rno,
    attendence: [
      {
        present: present,
        date: date,
      },
    ],
  });
  attendence
    .save()
    .then((result) => console.log("inserted Successfully"))
    .catch((err) => console.log(err));
};

exports.update = (req, res, next) => {
  const _id = req.body.id;
  const present = req.body.present;
  const date = req.body.date;

  Attendence.updateOne(
    { _id: _id },
    { $push: { attendence: { present: present, date: date } } }
  )
    .then(() => {
      console.log("updated successfully");
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

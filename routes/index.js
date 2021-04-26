const express = require("express");

const controller = require("../controllers/index");

const router = express.Router();

router.use("/list", controller.list);
router.use("/single", controller.singleRecord);
router.use("/new", controller.new);
router.use("/update", controller.update);

exports.router = router;

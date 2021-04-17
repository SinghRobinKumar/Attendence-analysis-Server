const express = require("express");

const controller = require("../controllers/index");

const router = express.Router();

router.use("/list", controller.list);
router.use("/new", controller.new);

exports.router = router;

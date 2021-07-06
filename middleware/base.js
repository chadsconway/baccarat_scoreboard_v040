var express = require("express");
const app = require("../app");
var router = express.Router();

router.get("/:specifics", function (req, res, next) {
  res.render("index");
});

module.exports = router;

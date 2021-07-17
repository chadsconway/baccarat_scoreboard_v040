var express = require("express");
const app = require("../../app");
var router = express.Router();

router.get("/regexp/:regexpression", function (req, res, next) {
  console.log("regexpression = " + req.params.regexpression);
  res.render("index");
});
/* GET dev page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;

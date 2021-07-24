var express = require("express");
const app = require("../app");
var router = express.Router();

router.get("/specs/:specifics", function (req, res, next) {
  res.send("Specs request: ", req.params.specifics);
});

module.exports = router;

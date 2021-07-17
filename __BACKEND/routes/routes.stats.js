var express = require("express");
const app = require("../../app");
var router = express.Router();

router.get("/inc:statid", (req, res) => {
  app.locals.stats.incStat(req.params.statid);
  console.log("route inc:statid, statid = " + req.params.statid);
});
router.get("/getall", (req, res) => {
  res.locals.stats = app.locals.stats;
  res.json(res.locals.stats.toJSON());
});

module.exports = router;

module.exports = function (req, res, next) {
  res.send("The views directory is " + req.app.get("views"));
};

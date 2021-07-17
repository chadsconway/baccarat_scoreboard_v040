module.exports = function (req, res, next) {
  res.send("TLS active: " + req.protocol === "https");
};

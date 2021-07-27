module.exports = function (req, res, next) {
  res.send(
    "The views directory is " +
      req.app.get("views") +
      "\n The variable __dirname = " +
      __dirname
  );
};

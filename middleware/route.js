module.exports = function checkMethod(req, res, next) {
  console.log(req.route);
  res.json(req.route.methods);
};

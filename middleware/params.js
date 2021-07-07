module.exports = function paramsreader(req, res, next, val, name) {
  console.log("req: " + req);
  console.log("res: " + res);
  console.log("next: " + next);
  console.log("val: " + val);
  console.log("name: " + name);
  res.send("Roger");
};

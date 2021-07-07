const app = require("../app");

module.exports = function (req, res, next) {
  app.locals.set("title", "Bacarrat Scoreboard");
};

require("dotenv").config();
var createError = require("http-errors");
var devscripts = process.env.DEVSCRIPTS;
// var test1 = require("./middleware/test.1");
var express = require("express");
var app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");

/**
 *  @Routers
 */
// var middlewareRouter = require("./__BACKEND/routes/router.middleware.js");
var statsRouter = require("./__BACKEND/routes/routes.stats.js");
var Stats = require("./__BACKEND/controllers/statistics");
var UI = require("./__BACKEND/routes/routes.ui.js");
var stats = new Stats();
var hbsutils = require("hbs-utils")(hbs);
var fs = require("fs");
// var dataRoutes = require("./routes/data")
var app = express();
app.set("views", __dirname + "/__FRONTEND/views");
app.set("view engine", "hbs");

function handleOnChange(template) {
  console.log("Partial " + template + " registered");
}
function handleDone() {
  console.log("all partials registered");
}

var opts = {
  precompile: false,
  onchange: handleOnChange(),
  name: handleOnChange(),
};
hbsutils.registerWatchedPartials(
  __dirname + "/__FRONTEND/views/partials",
  opts,
  handleDone()
);
//var test1 = require("./__BACKEND/middleware/test.1");

/**
 * var hbs = exphbs.create({
  helpers,
  partialsDir: ["views/partials/"],
});

*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "./__FRONTEND/public")));
app.use(logger("dev"));

app.locals.stats = stats;

/**
 * Expose locals and request locals inside views
 */
hbs.localsAsTemplateData(app);

// app.locals.title = "Bacarrat Scoreboard";

/**
 * all /dev routes
 */
//app.use("/dev", middlewareRouter);
/**
 * /stats/ routes
 */
app.use("/stats", statsRouter);

/**
 * route to access secure middleware
 */
// app.get("/secure", require("./__BACKEND/middleware/secure"));

/**
 *route for tests and admin
 */
app.get("/admin", (req, res) => {
  res.render("admin");
});

/**
 * home route
 */
app.get("/", function (req, res) {
  res.render("layout", { devscripts: false });
});
/**
 * route to /user/:id? middleware
 *
 * */
app.use(function (err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : err;

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

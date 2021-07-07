var Promise = global.Promise || require("promise");
var createError = require("http-errors");
var createParams = require("./middleware/params");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helpers = require("./lib/helpers");
var exphbs = require("express-handlebars");

var devRouter = require("./routes/router.dev.js");

// var test1 = require("./middleware/test.1");

var app = express();
/**
 * var hbs = exphbs.create({
  helpers,
  partialsDir: ["views/partials/"],
});
*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(logger("dev"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

/**
 * home route
 */
app.get("/", function (req, res) {
  res.render("home");
});

// app.locals.title = "Bacarrat Scoreboard";

/**
 * all /dev routes
 */
app.use("/dev", devRouter);
/**
 * route to access test1 middleware
 */
app.get("/viewdirectory", require("./middleware/test.1"));

/**
 * route to access secure middleware
 */
app.get("/secure", require("./middleware/secure"));

/**
 * route to /user/:id? middleware
 *
 */
app.get("/check", require("./middleware/route"));

/**
 * parsing the http object
 */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

/**
 * route to access test1 middleware
 */
 router.get("/viewdirectory", require("../middleware/test.1"));

 /**
  * verify __dirname path
  */
  router.get("/verifydirname", (req, res) => {
   res.send("__dirname in app.js = " + __dirname);
 });
 
 /**
  * parse regexp and render index page
  */
 router.get("/regexp/:regexpression", function (req, res, next) {
   console.log("regexpression = " + req.params.regexpression);
   res.render("layout");
 });
 
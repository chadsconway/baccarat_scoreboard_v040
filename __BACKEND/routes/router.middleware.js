var express = require("express");
const app = require("../../app");
var router = express.Router();
for(local in app.locals){
  console.log(local);
}

var mids = {
  base: false,
  params: false,
  route: false,
  secure: false
};
  if(mids.base){
    app.use("/specifics/:specifics", require("../middleware/base"));
  }
  if(mids.params){ 
    app.use(require("../middleware/params"));
  }
  if(mids.route){
    app.use(require("../middleware/route"));
  }
  if(mids.secure){
    app.use(require("../middleware/secure"));
  }

module.exports = router;

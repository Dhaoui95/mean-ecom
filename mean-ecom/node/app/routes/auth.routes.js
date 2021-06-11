const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const { upload } = require("../controllers/sysUpload.controller");
const sysUpload = require('../controllers/sysUpload.controller');
module.exports = function(app) {
  app.use(function(req, res, next) {
      res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
      );
      next();
  });

  app.post("/api/auth/signup",sysUpload.upload.any(),[verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted],controller.signup);

  app.post("/api/auth/signin", controller.signin);
};
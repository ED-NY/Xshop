const userRouter = require("./user");      //注册用户子路由
const billRouter = require("./bill");
const providerRouter = require("./provider");
const addressRouter = require("./address");
const roleRouter = require("./role");
const portalRouter = require("./portal");

const routes = (app) => {   //app来自middlewares
  app.use("/user", userRouter);
  app.use("/bill", billRouter);
  app.use("/provider", providerRouter);
  app.use("/address",addressRouter);
  app.use("/role",roleRouter);
  app.use("/portal",portalRouter);
}

module.exports = routes
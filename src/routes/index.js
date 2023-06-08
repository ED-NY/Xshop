const userRouter = require("./user");      //注册用户子路由
// const loginRouter = require("./login");
// const billRouter = require("./bill");
// const providerRouter = require("./provider");
// const addressRouter = require("./address");
// const roleRouter = require("./role");

const routes = (app) => {   //app来自middlewares
  app.use("/user", userRouter);
  // app.use("/login", loginRouter);
  // app.use("/bill", billRouter);
  // app.use("/provider", providerRouter);
  // app.use("/address",addressRouter);
  // app.use("/role",roleRouter);
}

module.exports = routes
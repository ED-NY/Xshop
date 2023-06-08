const express = require("express");
const port = 8080;
const app = express();

require("./middlewares/middlewaresConfig")(app); //注册中间件

app.listen(port, () => {
    console.log("服务器启动成功！");
});


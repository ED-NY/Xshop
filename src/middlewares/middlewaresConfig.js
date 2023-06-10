const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");

module.exports = app => {
    console.log("中间件启动");
    // CORS跨域执行
    let corsOpt = {
        origin: "*",
        optionsSuccessStatus: 200
    }
    app.use(cors(corsOpt))

    // 静态文件托管
    app.use(express.static(path.join(__dirname, "../../static")))

    // 解析请求体数据
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    // 路由
    require("../routes")(app)
}
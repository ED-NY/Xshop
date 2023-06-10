const express = require("express");
const jwt = require('jsonwebtoken');
const app = express.Router();
const DB_Model = require("../config/db/db_model"); //数据库执行

app.post('/adminNum',(req,res)=>{
    sql1 = 'select count(*) num from smbms_user';
    DB_Model.exeSql(sql1).then(
        result=>{
            res.send(result);
        }
    ).catch((err)=>{console.log("门户查询失败")})
});

app.post('/userNum',(req,res)=>{
    sql2 = 'select count(*) num from smbms_account';
    DB_Model.exeSql(sql2).then(
        result=>{
            res.send(result);
        }
    ).catch((err)=>{console.log("门户查询失败")})
});

app.post('/addressNum',(req,res)=>{
    sql3 = 'select count(*) num from smbms_address';
    DB_Model.exeSql(sql3).then(
        result=>{
            res.send(result);
        }
    ).catch((err)=>{console.log("门户查询失败")})
})

module.exports = app;
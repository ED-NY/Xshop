const express = require("express");
const jwt = require('jsonwebtoken');
const app = express.Router();
const DB_Model = require("../config/db/db_model"); //数据库执行


//查询供应商列表
app.post("/getProviderList", (req, res) => {
    var queryList = "select * from smbms_provider";
    DB_Model.exeSql(queryList).then(
        result => {
            console.log("用户表查询成功");
            res.send(result);
        }).catch((err) => {
            console.log("用户表查询失败");
        })
});

//根据指定的信息模糊查询供应商信息
app.post("/query_some",(req,res)=>{
    var query_s = 'select * from smbms_provider where 1=1';
    var arrq = [];
    if(req.body.id != null && req.body.id != ''){
        query_s += ' and id = ?';
        arrq.push(req.body.id);
    }
    if(req.body.proCode != null && req.body.proCode != ''){
        query_s += " and proCode like concat('%',?,'%')";
        arrq.push(req.body.proCode);
    }
    if(req.body.proName != null && req.body.proName != ''){
        query_s += " and proName like concat('%',?,'%')";
        arrq.push(req.body.proName);
    }
    if(req.body.proDesc != null && req.body.proDesc != ''){
        query_s += " and proDesc like concat('%',?,'%')";
        arrq.push(req.body.proDesc);
    }
    if(req.body.proContact != null && req.body.proContact != ''){
        query_s += " and proContact like concat('%',?,'%')";
        arrq.push(req.body.proContact);
    }
    if(req.body.proPhone != null && req.body.proPhone != ''){
        query_s += " and proPhone like concat('%',?,'%')";
        arrq.push(req.body.proPhone);
    }
    if(req.body.proAddress != null && req.body.proAddress != ''){
        query_s += " and proAddress like concat('%',?,'%')";
        arrq.push(req.body.proAddress);
    }
    if(req.body.proFax != null && req.body.proFax != ''){
        query_s += " and proFax like concat('%',?,'%')";
        arrq.push(req.body.proFax);
    }
    DB_Model.exeSql(query_s, arrq).then(
        result => {
            console.log("dao查询指定供应商信息成功");
            res.send(result);
        }).catch((err) => {
            console.log("doa查询指定供应商信息失败")
        })
})

//删除供应商
app.delete('/getDelete', (req, res) => {
    var delSql = 'delete from smbms_provider where id = ?';
    DB_Model.exeSql(delSql, req.body.id).then(
        result => {
            console.log("供应商删除成功");
            if (result.affectedRows > 0) {
                res.send(true);
            }
        });
});

//根据供应商信息修改
app.post("/getUpdate", (req, res) => {
    var uparr = [];
    var updateSql = 'update smbms_provider set id = ?';
    if (req.body.id != null && req.body.id != '') {
        uparr.push(req.body.id);
    }
    if (req.body.proCode != null && req.body.proCode != '') {
        updateSql += ',proCode = ?';
        uparr.push(req.body.proCode);
    }
    if (req.body.proName != null && req.body.proName != '') {
        updateSql += ',proName = ?';
        uparr.push(req.body.proName);
    }
    if (req.body.proDesc != null && req.body.proDesc != '') {
        updateSql += ',proDesc = ?';
        uparr.push(req.body.proDesc);
    }
    if (req.body.proContact != null && req.body.proContact != '') {
        updateSql += ',proContact = ?';
        uparr.push(req.body.proContact);
    }
    if (req.body.proPhone != null && req.body.proPhone != '') {
        updateSql += ',proPhone = ?';
        uparr.push(req.body.proPhone);
    }
    if (req.body.proAddress != null && req.body.proAddress != '') {
        updateSql += ',proAddress = ?';
        uparr.push(req.body.proAddress);
    }
    if (req.body.proFax != null && req.body.proFax != '') {
        updateSql += ',proFax = ?';
        uparr.push(req.body.proFax);
    }
    if (req.body.id != null && req.body.id != '') {
        updateSql += ' where id = ?';
        uparr.push(req.body.id);
    }
    console.log(uparr);
    console.log(updateSql);
    DB_Model.exeSql(updateSql, uparr).then(
        result => {
            console.log("更新供应商信息成功");
            res.send(result);
        }).catch((err) => {
            console.log("更新供应商信息失败")
        })
});

app.post('/addProvider',(req,res)=>{
    var adduser = 'insert into smbms_provider(proCode,proName,proContact,proPhone,proAddress,proFax,proDesc,createdBy,creationDate) values(?,?,?,?,?,?,?,?,?)';
    addarr = [req.body.proCode,req.body.proName,req.body.proContact,req.body.proPhone,req.body.proAddress,req.body.proFax,req.body.proDesc,req.body.createId,req.body.createDate];
    console.log(addarr);
    DB_Model.exeSql(adduser,addarr).then(
        result => {
            console.log("添加供应商成功");
            if (result.affectedRows > 0) {
                res.send(true);
            }
        }).catch((err)=>{
            console.log("添加供应商失败");
        })
    
});

app.post('/getproAddress',(req,res)=>{
    var query_a ='select smbms_map.name,count(*) value from smbms_map,smbms_provider where smbms_map.id = smbms_provider.proAddressId GROUP BY smbms_map.id';
    DB_Model.exeSql(query_a).then(
        result =>{
            res.send(result);
        }
    ).catch((err)=>{console.log('地图查询失败')})
})

module.exports = app;
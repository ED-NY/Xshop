const express = require("express");
const jwt = require('jsonwebtoken');
const app = express.Router();
const DB_Model = require("../config/db/db_model"); //数据库执行

//用于响应index的get请求查询数据库返回用户信息
app.post("/getUserList", (req, res) => {
    var queryList = "select smbms_user.id,userCode,userName,smbms_role.roleName role,birthday,phone,address,smbms_user.creationDate from smbms_user,smbms_role where smbms_user.userRole = smbms_role.id";
    DB_Model.exeSql(queryList).then(
        result => {
            console.log("用户表查询成功");
            res.send(result);
        }).catch((err) => {
            console.log("用户表查询失败");
        })
});

//查询用户角色数量分布
app.post("/getRoleWithUser", (req, res) => {
    var roleAndUser = 'select cast(count(*) as char) value,smbms_role.roleName name from smbms_user,smbms_role where smbms_user.userRole = smbms_role.id group by name'
    DB_Model.exeSql(roleAndUser).then(
        result => {
            console.log("查询网站用户角色情况成功")
            res.send(result);
        }).catch((err) => {
            console.log("查询用户角色分布情况失败");
        })
});

//查询用户的性别信息
app.post('/genderData',(req,res)=>{
    var genderCount = 'select count(*) value,smbms_gender.gender name from smbms_user,smbms_gender where smbms_gender.id = smbms_user.gender group by smbms_gender.gender';
    DB_Model.exeSql(genderCount).then(
        result=>{
            res.send(result);
        }).catch((err)=>{console.log("性别查询失败")})
})

//根据条件筛选用户
app.post("/query_some", (req, res) => {
    var query_sql = 'select smbms_user.id,userCode,userName,roleName role,birthday,phone,address,smbms_user.creationDate from smbms_user,smbms_role where smbms_user.userRole = smbms_role.id';
    var into = [];
    if (req.body.id != null && req.body.id != '') {
        query_sql += " and smbms_user.id = ?";
        into.push(req.body.id);
    }
    if (req.body.user != null && req.body.user != '') {
        query_sql += " and userName like concat('%',?,'%')";
        into.push(req.body.user);
    }
    if (req.body.address != null && req.body.address != '') {
        query_sql += " and address like concat('%',?,'%')";
        into.push(req.body.address);
    }
    if (req.body.role != null && req.body.role != '') {
        query_sql += " and userRole = ?";
        into.push(req.body.role);
    }
    console.log(into);
    console.log(query_sql);
    DB_Model.exeSql(query_sql, into).then(
        result => {
            console.log("dao查询指定用户信息成功");
            res.send(result);
        }).catch((err) => {
            console.log("doa查询指定用户信息失败")
        })
});

//给出筛选条件中的用户角色选项
app.post("/getRole", (req, res) => {
    var getrole = 'select id value,roleName label from smbms_role';
    DB_Model.exeSql(getrole).then(
        result => {
            console.log("查询用户角色选项成功");
            res.send(result);
        }).catch((err) => {
            console.log("查询用户角色选项失败")
        })
})

//用于用户信息修改
app.post("/getUpdate", (req, res) => {
    var uparr = [];
    var updateSql = 'update smbms_user set id = ?';
    if (req.body.id != null && req.body.id != '') {
        uparr.push(req.body.id);
    }
    if (req.body.userName != null && req.body.userName != '') {
        updateSql += ',userName = ?';
        uparr.push(req.body.userName);
    }
    if (req.body.birthday != null && req.body.birthday != '') {
        updateSql += ',birthday = ?';
        uparr.push(req.body.birthday);
    }
    if (req.body.phone != null && req.body.phone != '') {
        updateSql += ',phone = ?';
        uparr.push(req.body.phone);
    }
    if (req.body.address != null && req.body.address != '') {
        updateSql += ',address = ?';
        uparr.push(req.body.address);
    }
    if (req.body.id != null && req.body.id != '') {
        updateSql += ' where id = ?';
        uparr.push(req.body.id);
    }
    console.log(uparr);
    console.log(updateSql);
    DB_Model.exeSql(updateSql, uparr).then(
        result => {
            console.log("更新用户信息成功");
            res.send(result);
        }).catch((err) => {
            console.log("更新用户信息失败")
        })
});

app.delete('/getDelete', (req, res) => {
    var delSql = 'delete from smbms_user where id = ?';
    DB_Model.exeSql(delSql, req.body.id).then(
        result => {
            console.log("用户删除成功");
            if (result.affectedRows > 0) {
                res.send(true);
            }
        });
});

app.post('/altPassword', (req, res) => {
    var altPass = "update smbms_user set userPassword = ? where id = ?"
    altarr = [];
    altarr.push(req.body.pass);
    altarr.push(req.body.id)
    DB_Model.exeSql(altPass, altarr).then(
        result => {
            console.log("密码修改成功");
            if (result.affectedRows > 0) {
                res.send(true);
            }
        }).catch((err)=>{
            console.log("修改失败");
        })
});

app.post('/addUser',(req,res)=>{
    var adduser = 'insert into smbms_user(userCode,userName,userPassword,gender,birthday,phone,address,userRole,createdBy,creationDate) values(?,?,?,?,?,?,?,?,?,?)';
    addarr = [req.body.userCode,req.body.userName,req.body.pass,req.body.gender,req.body.birthday,req.body.phone,req.body.addaress,req.body.role,req.body.createId,req.body.createDate];
    DB_Model.exeSql(adduser,addarr).then(
        result => {
            console.log("添加用户成功");
            if (result.affectedRows > 0) {
                res.send(true);
            }
        }).catch((err)=>{
            console.log("添加用户失败");
        })
    
})


//登录生成token返回用于验证用户
app.post('/getLogin',(req,res)=>{
    var login = 'select id,userCode from smbms_user where userCode = ? and userPassword = ?';
    loginArr = [req.body.userCode,req.body.pass];
    DB_Model.exeSql(login,loginArr).then(
        result => {
            const token = jwt.sign({name:'tom'},'aaaa', { expiresIn: 60 * 60 });
            result["token"] = token;
            res.send(result);
        }
    ).catch((err)=>{console.log('登录失败')});
})

//访问其他页面的验证
app.post('/judge',(req,res)=>{
    var judges = 'select id,userCode from smbms_user where id = ? and userCode = ?';
    judgearr = [req.body.id,req.body.userCode];
    DB_Model.exeSql(judges,judgearr).then(
        result=>{
            res.send(result);
        }
    ).catch((err)=>{console.log('验证失败')});
})

module.exports = app;
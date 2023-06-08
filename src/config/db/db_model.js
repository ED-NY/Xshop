const mysql = require('mysql'); //导入模块
const DB_CONFIG = require("./db_config"); //将配置信息导入

class DB_Model{
    static con; 
    static connect(){
        this.con = mysql.createConnection(DB_CONFIG);
    }
    static end(){
        this.con.end();
    }

    static exeSql(sql,params=[]){
        let promise = new Promise((resolve,reject)=>{
            this.connect();  //连接
            this.con.query(sql,params,(err,result)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
            this.end();
        });
        return promise;
    }
}

module.exports = DB_Model;
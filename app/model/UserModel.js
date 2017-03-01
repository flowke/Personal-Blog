const path = require('path');
const async = require('async');
const Model = require(path.resolve(GLOBALPATH.CORE_PATH, 'Model.js'));

module.exports = class extends Model{
    constructor(table){
        super(table);
    }

    login(data, cb){
        let sql;
        async.series([
            cb=>{
                sql = `SELECT * FROM ${this.table} WHERE user_name = ? LIMIT 1`;
                this.getAll(sql,[data[0]],(err,ret)=>{
                    cb(err,ret);
                });
            },
            cb=>{
                sql = `SELECT * FROM ${this.table} WHERE user_name = ? AND user_passw = ? LIMIT 1`;
                this.getAll(sql,data,(err,ret)=>{
                    cb(err,ret);
                });
            }
        ],(err,rets)=>{
            cb(err,rets);
        });
    }

    signin(data,cb){
        let sql = `INSERT INTO ${this.table} (user_name, user_passw) VALUES (?,?)`;
        this.insert(sql, data,(err,ret)=>{

            cb(err,ret);
        });
    }
}

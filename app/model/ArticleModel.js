const path = require('path');
const async = require('async');
const Model = require(path.resolve(GLOBALPATH.CORE_PATH, 'Model.js'));

module.exports = class extends Model{

    constructor(table){
        super(table);
    }

    addAlbum(data, cb){
        let sql = `INSERT INTO ${this.table}(album_name, album_desc, user_id) VALUES (?,?,?)`;
        this.insert(data,cb);
    }
    getAlbum(data, cb){
        let sql = `SELECT * FROM ${this.table} WHERE user_id =?`;
        this.getAll(data,cb);
    }
}


const path = require('path');
const async = require('async');
const session = require('express-session');
const ArticleModel = require(path.resolve(GLOBALPATH.MODEL_PATH,'ArticleModel.js'));

module.exports = class{
    addAlbumAction(req, res){
        let {id, name, desc} = req.body;

        let articleModel = new articleModel('album');
        articleModel.addAlbum([id,name,desc], (err, ret)=>{
            if(!err){
                res.json({
                    code: 0,
                    msg: 'success',
                    data: ret.insertId
                })
            }
        });
    }
    
    getAlbumsAction(req, res){
        let {id} = req.body;
        let articleModel = new articleModel('album');
        articleModel.addAlbum([id], (err, ret)=>{
            if(!err){
                if(!ret.length){
                    res.json({
                        code: 0,
                        msg: 'success',
                        data: ret
                    })
                }
            }
        });
    }
}

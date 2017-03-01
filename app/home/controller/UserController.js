const path = require('path');
const async = require('async');
const session = require('express-session');
const UserModel = require(path.resolve(GLOBALPATH.MODEL_PATH,'UserModel.js'));
module.exports = class{

    autoLogAction(req, res){
        let {userInfo} = req.session;
        if(userInfo){
            res.json(userInfo);
        }else{
            res.json({code:1})
        }
    }

    logoutAction(req, res){
        req.session.userInfo = null;
        res.end();
    }

    loginAction(req, res){

        let { username, passw } = req.body;

        let userModel = new UserModel('user');
        userModel.login([username, passw],(err,ret)=>{
            // console.log(ret)
            if(!ret[0].length){
                res.json({
                    code: 1,
                    msg: '用户名不存在'
                })
                return;
            }

            if( !ret[1].length ){
                res.json({
                    "code" : 2,
                    "msg" : "密码错误"
                });
            }else{
                let data = {
                    code: 0,
                    msg: 'good',
                    data: ret[0]
                }
                req.session.userInfo = data;
                res.json(data);
            }
        });
    }

    signupAction(req, res){
        let {username, passw, cfpassw } = req.body;

        if(!(username || passw || cfpassw)){ return }
        let userModel = new UserModel('user');
        userModel.signin([username, passw],(err,ret)=>{
            if(ret){
                req.session.userInfo = {
                    code: 0,
                    msg: '登陆成功',
                    data: {
                        id: ret.insertId,
                        username: username
                    }
                }
                res.json({
                    code: 0,
                    msg: '注册成功',
                    data: ret
                })
            }else{
                res.json({
                    code: 1,
                    msg: '注册失败, 可能用户名已存在',
                    data: err
                })
            }
        });
    }
}

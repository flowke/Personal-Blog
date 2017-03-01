const express = require('express');
const path = require('path');
const cors = require('cors');
const S = require('string');
const session = require('express-session');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser');

let config = require(path.resolve(process.cwd(), 'app/config/config'));


let app = express();
app.listen(8082);

module.exports = class Initiate {
    constructor() {

    }

    static run(){
        this.defineGlobalVar();
        this.initMiddleware();
        this.routerDispatch();
    }

    static initMiddleware(){
        // app.use(express.static(GLOBALPATH.PUBLIC_PATH));
        // 加载 bodyparser, 处理 post 数据
        app.use(bodyParser.urlencoded({extended: true}));
        // 跨域访问
        app.use(cors({
            origin: true,
            credentials: true
        }));
        // app.use((req, res, next)=>{
        //     res.header("Access-Control-Allow-Origin", req.headers.origin);
        //     res.header("Access-Control-Allow-Headers", "X-Requested-With");
        //     res.header("Access-Control-Allow-Credentials", true);
        //     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        //     res.header("X-Powered-By",' 3.2.1')
        //     res.header("Content-Type", "application/json;charset=utf-8");
        //     next();
        // });

        // about handlesession
        app.use(session({
            secret: "flowke'blog",
            proxy: true,
            resave: true,
            saveUninitialized: true
        }));
        app.use( (req, res, next)=>{
            next();
        } );
    }

    static routerDispatch(){
        app.get('*',(req, res)=>{

            res.sendFile(path.resolve(GLOBALPATH.ROOT_PATH, 'index.html'));
            return;

        } );

        app.post('/:p/:c/:a', (req, res)=>{
            let {p, c, a} = req.params;

            if(!p || !c || !a){
                res.end();
                return;
            }

            let controllerPath = path.resolve(GLOBALPATH.APP_PATH, p, 'controller', S(c).capitalize().s+ 'Controller.js');
            let Controller = null;
            try{
                Controller = require(controllerPath);
            }catch(e){
                res.end();
                return;
            }
            let controller = new Controller();
            controller[`${a}Action`].apply(null, [req,res]);
        } );

    }

    static defineGlobalVar(){
        Object.assign(global, {
            GLOBALPATH: config.path
        });
    }


}

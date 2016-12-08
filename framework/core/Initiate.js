let express = require('express');
let path = require('path')
let config = require(path.resolve(process.cwd(), 'app/config/config'))

let app = express()
// app.set('view', './app/view');
module.exports = class Initiate {
    constructor() {

    }

    static run(){
        this.defineGlobalVar();
        this.init();
    }

    static init(){
        app.use(express.static(GLOBALPATH.PUBLIC_PATH));

        app.all('/:p?/:c?/:a?', (req, res)=>{

            let {p, c, a} = req.params;
            c = c || 'index';
            a = a || 'index';
            p = p || 'home';

            let controllerClass = require(path.resolve(GLOBALPATH.CONTROLLER_PATH, p,`${c}Controller.js`));

            let controller = new controllerClass();
            controller[`${a}Action`].apply(null, [req,res]);
        } );

        app.listen(8082);

    }

    static defineGlobalVar(){
        Object.assign(global, {
            GLOBALPATH: config.path
        });
    }


}

const path = require('path');

module.exports = class{
    indexAction(req, res){
        res.sendFile(path.resolve(GLOBALPATH.VIEW_PATH, 'home/index.html'));
    }
}

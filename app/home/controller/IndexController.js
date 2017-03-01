const path = require('path');

module.exports = class{
    indexAction(req, res){
        res.sendFile(path.resolve(GLOBALPATH.HOME_PATH, 'view/index.html'));
    }
}

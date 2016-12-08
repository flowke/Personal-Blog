const path = require('path');

exports.db = {
    host: 'localhost',
    user: 'root',
    password: 'hh',
    database: 'blog',
    port: 3306,
    charset: 'utf8'
}
const ROOT = process.cwd();
exports.path = {
    ROOT: ROOT,
    CONFIG_PATH: path.resolve(ROOT, 'app/config'),
    CONTROLLER_PATH: path.resolve(ROOT, 'app/controller'),
    MODEL_PATH: path.resolve(ROOT, 'app/controller'),
    VIEW_PATH: path.resolve(ROOT, 'app/view'),
    PUBLIC_PATH: path.resolve(ROOT, 'public')
}

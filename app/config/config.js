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
    ROOT_PATH: ROOT,
    APP_PATH: path.resolve(ROOT, 'app'),
    CONFIG_PATH: path.resolve(ROOT, 'app/config'),
    HOME_PATH: path.resolve(ROOT,'app/home'),
    MODEL_PATH: path.resolve(ROOT, 'app/model'),
    CORE_PATH: path.resolve(ROOT, 'framework/core'),
    DATABASE_PATH: path.resolve(ROOT, 'framework/database'),
    HELPER_PATH: path.resolve(ROOT, 'framework/helper'),
    PUBLIC_PATH: path.resolve(ROOT, 'public'),
}

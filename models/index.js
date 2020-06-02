var Sequelize = require('sequelize');
var path = require('path');
var fs = require('fs');
var dotenv = require('dotenv');

// [Load config]
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '+09:00', // 한국 시간 설정
    operatorsAliases: Sequelize.Op,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

let db = [];

fs.readdirSync(__dirname)
    // index.js 파일을 제외한 models 디렉토리 내 모든 .js 파일
    .filter(file => {
        return file.indexOf('.js') && file !== 'index.js';
    })
    .forEach(file => {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

// associate : Foreign key 적용 관련 설정
Object.keys(db).forEach(modelName => {
    if("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
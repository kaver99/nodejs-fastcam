const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./models');


class App {
    constructor() {
        this.app = express();

        // [db connection setting]
        this.dbConnection();

        // [view engine setting]
        this.setViewEngine();

        // [middleware setting]
        this.setMiddleware();

        // [static file setting]
        this.settStatic();

        // [locale variable setting]
        this.setLocals();

        // [routing setting]
        this.getRouting();

        // [404 Error page setting]
        this.status404();

        // [error Handler setting]
        this.errorHandler();
    }

    // [db connection setting]
    dbConnection() {
        // DB Authentication
        db.sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .then(() => {
                console.log('Db Sync complate.');
            })
            .catch(() => {
                console.error('Unable to connect to the database: ', err);
            });
    }


    // [middleware setting(미들웨어)]
    setMiddleware() {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    // [template engine setting]
    setViewEngine() {
        nunjucks.configure('templates', {
            autoescape: true, // HTML Tag cross site attach Defence
            express: this.app
        });
    }

    // [static file setting(정적 파일 대상 폴더 지정)]
    settStatic() {
        this.app.use('/uploads', express.static('uploads'));
    }

    // [Global Variable setting(전역 변수)]
    setLocals() {
        this.app.use( (req, res, next) => {
            this.app.locals.isLogin = true;
            this.app.locals.req_path = req.path; // req.path : express에서 현재 url정보
            next();
        });
    }

    // [routing setting]
    getRouting() {
        this.app.use(require('./controllers'));
    }

    // [404 Error Page]
    status404() {
        this.app.use( (req, res, _) => {
            res.status(400).render('common/404.html');
        });
    }

    // [error Handler]
    errorHandler() {
        this.app.use( (err, req, res, _) => {
            console.log(err);
            res.status(500).render('common/500.html');
        })
    }
}

module.exports = new App().app;


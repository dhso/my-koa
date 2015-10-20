"use strict";
var path = require('path')

module.exports= {
    name:"codeman",
    keys: ['ad8945ce1ebc5b4269ca3bfa0ba37a678c97bb27'],
    env: "development",
    port: 3000,
    static: {
        root: path.resolve(__dirname,'../static'),
        opt: {}
    },
    controller: {
        routesPath: path.resolve(__dirname,'routes.js'),
        controllerPath: path.resolve(__dirname,'../controllers/{controller}Controller.js'),
        constraintPath: path.resolve(__dirname,'../constraints/{constraint}Constraint.js')
    },
    bodyparser: {},
    session: {
        cookie: {
            maxAge: 1000 * 60 * 60 * 24//24 hours
        }
    },
    view: {
        directory: path.resolve(__dirname, '../views'),
        map: {map: { htm: 'swig' }}
    },
    mysql: {
        host     : '127.0.0.1',
        port     : 3306,
        user     : 'root',
        password : '923389',
        database : 'eastbride',
        connectionLimit : 10
    },
    error: {
        view: 'error/error',
        layout: 'layouts/error',
        custom: {
            401: 'error/401',
            403: 'error/403',
            404: 'error/404',
        },
    },
};
"use strict";
var app = require('koa')();
var config =  require('./configs/config');

app.name= config.name
app.keys= config.keys
app.env= config.env

app.use(require('koa-logger')())
app.use(require('koa-body')(config.bodyparser))
app.use(require('koa-views')(config.view.directory, config.view.map))
app.use(require('koa-session')(config.session, app))
app.use(require('koa-controller').router(config.controller))
app.use(require('koa-static')(config.static.root, config.static.opt))

app.listen(config.port, function(){
	console.log('listening on port :' + config.port);
})
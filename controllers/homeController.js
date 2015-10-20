"use strict";
var homeModel = require('./../model/homeModel');

module.exports = {
 
  index: function *(next) {
	this.state = {
		session: this.session,
		title: 'app'
	};
	var pics = yield homeModel.getPic;
  yield this.render('home/index.htm', { pics: pics });
  },

  json: function *(next) {
  	 this.body = JSON.stringify({a:1,b:"sss"});
  	 yield next;
  }
};
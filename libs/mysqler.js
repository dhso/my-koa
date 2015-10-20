var config =  require('./../configs/config');
var pool = require('mysql').createPool(config.mysql);

// setup views mapping .htm
// to the swig template engine

module.exports = {
	query: function (query, params) {
		console.info('  SQL : ' + query + ' , ARG : ' + params);
		var defer = Promise.defer();
		var tempParams = params || {};
		pool.getConnection(function(err, connection) {
			if (err) {
				if (connection) {
					connection.release();
				}
				return defer.reject(err);
			}
			connection.query(query, tempParams, function(err, results){
				if (err) {
					if (connection) {
					    connection.release();
					}
					return defer.reject(err);
				}
				connection.release();
				defer.resolve(results);
			});
		});
		return defer.promise;
	}
}
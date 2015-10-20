var mysqler =  require('./../libs/mysqler');

module.exports = {
	getPic: function *(next){
		var rows =  yield mysqler.query('SELECT * FROM eastbride_gallery' );
		return rows;
	}
}
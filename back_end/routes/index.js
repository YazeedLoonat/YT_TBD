const urlRoute = require("./urlRoutes/index.js");
module.exports = app => {
	//this is where we add routes. 
	app.route('/url').get(urlRoute.get);
}
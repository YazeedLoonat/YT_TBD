const urlRoute = require("./urlRoutes");
const login = require("./login");
module.exports = app => {
	app.route('/url').get(urlRoute.get);
	app.route('/login').post(login.post);
	app.route('/').post(( req, res ) => res.json(["bird noises"]));
}
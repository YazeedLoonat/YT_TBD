const urlRoute = require("./urlRoutes/index.js");
const login = require("./login/index.js");
module.exports = app => {
	app.route('/url').get(urlRoute.get);
	app.route('/login').post(login.post);
	app.route('/').post(( req, res ) => res.json(["bird noises"]));
}
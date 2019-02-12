const auth = require("../../Auth");

const post = ( req, res ) =>  {
	const { email, password } = req.body;
	//TODO: hit db for this
	if (email === "test@test.test" && password === "test") {
		res.json(auth.createToken({info: "yeahboy"}));
	}
	else {
		throw new Error("The email/password is invalid");
	}
};
module.exports = { post };
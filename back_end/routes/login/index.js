const auth = require("../../Auth");

const post = ( req, res ) =>  {
	const { email, password } = req.body;
	//TODO: hit db for this
	if (email === "test@test.test" && password === "test") {
		const toSign = {info: "yeahboy"};
		res.json({token: auth.createToken(toSign)});
	}
	else {
		res.json({ failed: 1 });
	}
};
module.exports = { post };
const post = ( req, res ) =>  {
	console.log(req.body);
	const { email, password } = req.body;

	//TODO: hit db for this
	if (email === "test@test.test" && password === "test") {
		res.json("yeah boy");
	}
	else {
		res.json(["hello"]);
	}
};
module.exports = { post };
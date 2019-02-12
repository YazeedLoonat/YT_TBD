const jwt = require("jsonwebtoken");

const createToken = ( obj ) =>  {
	const token = jwt.sign({
		data: {...obj}
	}, 'goodSecret', { expiresIn: "1w"});
	return token;
};
module.exports = {
	createToken
};
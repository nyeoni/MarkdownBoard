require('dotenv').config();
const env = process.env;
const jwt = require('jsonwebtoken');
const secret_key = env.SECRET_KEY;

const verifyToken = function(token){
	try {
		return jwt.verify(token, secret_key);
	} catch (err) {
		if (err.name === 'TokenExpiredError'){
			return null;
		}
		return null;
	}
}

module.exports = {
	verifyToken: verifyToken,
}
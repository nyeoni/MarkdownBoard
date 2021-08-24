require('dotenv').config();
const env = process.env;
const secret_key = env.SECRET_KEY;
const {user} = require(('./../models'));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = function(req, res){
	const {id, password} = req.body;

	console.log(id,password);

	user.findOne({where: {user_id: id}}).then((info) => {

		if (!info) {
			return res.status(400).json({
				token: null,
				result: false,
				message: "존재하지 않는 아이디 입니다."
			});
		}
		else {
			const hashpass = info.password;
			bcrypt.compare(password, hashpass).then(function(result) {
				if (result) {
					const token = jwt.sign({key_id: info.id}, secret_key, {expiresIn: '2h'});
					return res.status(200).json({
						token,
						result: true,
						message: `환영합니다. ${info.name}님.`
					})
				}
				else {
					return res.status(400).json({
						token: null,
						result: false,
						message: "비밀번호가 틀렸습니다."
					})
				}
			}).catch((err)=> {
				console.log(err);
				return res.status(400).json({
					token: null,
					result: false,
					message: "해시 오류발생"
				})
			})
		}
	})
	.catch((err)=> {
		console.log(err);
		return res.status(400).json({
			result: false,
			message: "오류발생"
		})
	})
}

module.exports = { login: login };
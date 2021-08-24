require('dotenv').config();
const env = process.env;
const secret_key = env.SECRET_KEY;
const admin_id = env.ADMIN_ID;

const {verifyToken} = require("../utils/auth");
const {user} = require(('./../models'));

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10
let is_admin = false;

const login = function(req, res){
	const {id, password} = req.body;

	user.findOne({where: {user_id: id}}).then((info) => {
		
		if (!info) {
			return res.status(400).json({
				result: false,
				message: "존재하지 않는 아이디 입니다.",
				isAmin: is_admin,
				isAuth: false,
			});
		}
		else {
			const hashpass = info.password;
			bcrypt.compare(password, hashpass).then(function(result) {
				if (result) {
					if (id == env.ADMIN_ID) is_admin = true;

					// const refreshToken = jwt.sign({key_id: info.id},
					// 	secret_key,
					// 	{
					// 		expiresIn: '14d',
					// 		issuer: "nkim",
					// 	});

					const accessToken = jwt.sign({key_id: info.id},
						secret_key,
						{
							expiresIn: '1h',
							issuer: "nkim",
						});

					//DB에 refreshToken 저장

					//웹 브라우저(클라이언트)에 accessToken 세팅
					res.cookie('access', accessToken);
					return res.status(200).json({
						result: true,
						message: `환영합니다. ${info.name}님.`,
						isAmin: is_admin,
						isAuth: true,
					})
				}
				else {
					return res.status(400).json({
						result: false,
						message: "비밀번호가 틀렸습니다.",
						isAmin: is_admin,
						isAuth: false,
					})
				}
			}).catch((err)=> {
				console.log(err);
				return res.status(400).json({
					result: false,
					message: "해시 오류발생",
					isAmin: is_admin,
					isAuth: false,
				})
			})
		}
	})
	.catch((err)=> {
		console.log(err);
		return res.status(400).json({
			result: false,
			message: "오류발생",
			isAmin: is_admin,
			isAuth: false,
		})
	})
}

let flag = false;

const register = function(req, res){
	const {user_id, email, name, password} = req.body;

	//아이디 중복 체크
	user.findOne({where: {user_id: user_id}}).then((info) => {
		if (info) {
			return res.status(400).json({
				result: false,
				message: "이미 등록된 아이디 입니다.",
				isIdDup: true,
				isEmailDup: false,
			})
		}
		//이메일 중복 체크
	user.findOne({where: {email: email}}).then((info) => {
		if (info) {
			return res.status(400).json({
				result: false,
				message: "이미 등록된 이메일 입니다.",
				isIdDup: false,
				isEmailDup: true,
			})
		}

		bcrypt.hash(password, saltRounds).then((hash) => {
			user.create({user_id:user_id, email:email, name:name, password:hash})
			.then(()=>{
				return res.status(200).json({
					result: true,
					message: `회원가입을 축하드립니다 ${name}님. 로그인 해주세요 이제`,
					isIdDup: false,
					isEmailDup: false,
				})
			}).catch((err)=>{
				console.log(err);
				return res.status(400).json({
					message: "데이터베이스에 데이터 추가 실패 에러"
				})
			})
		}).catch((err)=>{
			console.log(err);
			return res.status(400).json({
				message: "비밀번호 해시화 실패 에러"
			})
		})

	}).catch((err) => {
		console.log(err);
		return res.status(400).json({
			message: "이메일 중복 체크 오류"
		})
	})

	

	}).catch((err) => {
		console.log(err);
		return res.status(400).json({
			message: "아이디 중복 체크 오류"
		})
	})
	// //이메일 중복 체크
	// user.findOne({where: {email: email}}).then((info) => {
	// 	if (info) {
	// 		res.status(400).json({
	// 			result: false,
	// 			message: "이미 등록된 이메일 입니다.",
	// 			isIdDup: false,
	// 			isEmailDup: true,
	// 		})
	// 	}
	// }).catch((err) => {
	// 	console.log(err);
	// 	res.status(400).json({
	// 		message: "이메일 중복 체크 오류"
	// 	})
	// })
	//비밀번호 해시화
	// bcrypt.hash(password, saltRounds).then((hash) => {
	// 	user.create({user_id:user_id, email:email, name:name, password:hash})
	// 	.then(()=>{
	// 		res.status(200).json({
	// 			result: true,
	// 			message: `회원가입을 축하드립니다 ${name}님. 로그인 해주세요 이제`,
	// 			isIdDup: false,
	// 			isEmailDup: true,
	// 		})
	// 	}).catch((err)=>{
	// 		console.log(err);
	// 		res.status(400).json({
	// 			message: "데이터베이스에 데이터 추가 실패 에러"
	// 		})
	// 	})
	// }).catch((err)=>{
	// 	console.log(err);
	// 	res.status(400).json({
	// 		message: "비밀번호 해시화 실패 에러"
	// 	})
	// })
}

const auth = async function(req, res){

	//접근 토큰이 없는 경우
	if (req.cookies.access === undefined) {
		return res.status(200).json({
			result: true,
			message: "접근 토큰이 없습니다.",
			isAmin: false,
			isAuth: false,
		});
	}

	// 토큰
	const accessToken = await verifyToken(req.cookies.access);
	// const refreshToken = verifyToken(req.cookies.refresh);

	// accessToken이 만료된 경우
	if (accessToken === null) {
		return res.status(200).json({
			result: true,
			message: "접근 토큰이 만료되었습니다.",
			isAmin: false,
			isAuth: false,
		});
	}

	const tokenId = accessToken.key_id;
	user.findOne({where:{id:tokenId}}).then((info)=>{
		if (info.user_id == admin_id){
			return res.status(200).json({
				result: true,
				message: "관리자 토큰 확인",
				isAmin: true,
				isAuth: true,
			});
		}
		else if (info) {
			return res.status(200).json({
				result: true,
				message: "회원 토큰 확인",
				isAmin: false,
				isAuth: true,
			});
		}
		else {
			return res.status(200).json({
				result: true,
				message: "토큰에 해당하는 아이디가 존재하지 않습니다.",
				isAmin: false,
				isAuth: false,
			});
		}
	}).catch((err)=>{
		console.log(err);
		return res.status(400).json({
			result: true,
			message: "접근 토큰 아이디 조회 에러",
			isAmin: false,
			isAuth: false,
		});
	})
}

module.exports = {
	login: login,
	register: register,
	auth: auth,
 };
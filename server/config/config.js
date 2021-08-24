require('dotenv').config();

const env = process.env;
const config = module.exports = {};

config.development = {
	username: env.DB_USER,
	password: env.DB_PASS,
	database: env.DB_NAME,
	host: env.DB_HOST,
	dialect: env.DB_DIALECT
};

config.production = {
	username: env.DB_USER,
	password: env.DB_PASS,
	database: env.DB_NAME,
	host: env.DB_HOST,
	dialect: env.DB_DIALECT
};

config.test = {
	username: env.DB_USER,
	password: env.DB_PASS,
	database: env.DB_NAME,
	host: env.DB_HOST,
	dialect: env.DB_DIALECT
};
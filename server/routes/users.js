require('dotenv').config();
const env = process.env;
const login_api = env.LOGIN;
const register_api = env.REGISTER;
const express = require('express');
const router = express.Router();
const controller = require('./../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post(login_api, controller.login);
// router.post('/login', controller.login);

router.post(register_api, controller.register);

module.exports = router;

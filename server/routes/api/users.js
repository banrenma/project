/*
	用户的一些信息 相关路由

*/

var express = require('express');
var router = express.Router();

var dbusers = require('../../js/db/dbusers.js')


router.use(function(req,res,next){
	console.log('------111----------------')
	console.log('Time :' ,Date.now());
	next();
})

router.post('/login', function(req, res, next) {

	var email = req.param('email')
	var password = req.param('password')
	console.log(email)

	dbusers.login(email,password,function(data){
		req.session.userName = data.data.name?data.data.name:data.data.email;
		// res.signedCookies.userName = req.session.userName;
		// console.log(req.session)
		// console.log(req.signedCookies)
		res.cookie('userName',req.session.userName, { maxAge: 1000*60*60*24*7} ).status(200).json(data);
	
	})

  //res.render('login',{ title: 'login',navbarActiveId :0})
});

router.post('/register', function(req, res, next) {

	var email = req.param('email')
	var password = req.param('password')
	
	dbusers.register(email,password,function(data){
		req.session.userName = data.data.name?data.data.name:data.data.email;
		
		res.cookie('userName',req.session.userName, { maxAge: 1000*60*60*24*7} ).status(200).json(data);
	})
});

router.post('/logout', function(req, res, next) {
	req.session.destroy();
	res.clearCookie('userName').status(200).end();
});

module.exports = router;
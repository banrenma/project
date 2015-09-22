/*
	根目录

*/

var express = require('express');
var router = express.Router();
var url = require('url')

router.use(function(req,res,next){
	console.log('Time :' ,Date.now());
	next();
})

// router.get(/^(?!\/api)/,function(req,res,next){
// 	res.render('index')
// })

router.use(function(req,res,next){
	console.log(req.session)
	res.render('index')
})

module.exports = router;
var db = require('../db/dbconnect.js')
var Schema = db.Schema;
//用户信息数据库
//

//level 用户等级  0 超级管理员  1 管理员   2 普通用户
var usersSchema = new Schema({
	name: String,
	email: String,
	password:String,
	level:Number,
	userinfo:{}
})

var testinfo  = {
	aa:'tesa',
	bb:1,
	cc:[2,1]
}

var Users = db.model('Users',usersSchema);

//增
// var user = new Users();
// user.name = 'test1',

// user.userinfo = testinfo,

// user.markModified('userinfo')

// user.save();
Users.findOne({name:'ss'},function(err,user){
	console.log(user);
	// user.name = 'bbbbb';
	// user.save();
})



// //删除

// Users.remove(function(err,pro){
// 	console.log('-------------ss-----------------------')
// 	console.log(pro)
// 	var query = Users.find(null,'name userinfo',function(err,doc){
// 	console.log('------------------------------------')
// 	console.log(doc)
// })
// })

// Users.find({name:'test2'}).remove(function(err,pro){
// 		console.log('------------------------------------')
// 	console.log(pro)
// });


// //查找
// Users.find(null,'name userinfo',function(err,doc){
// 	console.log('------------------------------------')
// 	console.log(doc)
// })


// //修改
// Users.find({name:'aaaaaaaa'}).setOptions({ overwrite: true, multi: true }).update({$set:{name:'vv'}},function(err,data){
// 	console.log(data)
// })

// //统计

// Users.find().count(function(err,count){
// 	console.log('there are %d kittens', count);
// })


var db = require('./dbconnect.js')
var Schema = db.Schema;
//用户信息数据库
//
// var userInfo = new Schema({
// 	phoneNumber:String,
// 	question:Array
// })
//level 用户等级  0 超级管理员  1 管理员   2 普通用户
var usersSchema = new Schema({
	name: String,
	email: String,
	password:String,
	level:Number,
	// userinfo:userInfo
})

var UsersModel = db.model('Users',usersSchema);

var usersInstance = null;

function Users(){

}


Users.prototype.login = function(email,password,callback){
	UsersModel.findOne({email:email},function(err,data){
		if(err){
			console.log(err)
			return
		}
		console.log(data)
		var status= 'error';
		var errorType=null;
		var errorMsg = null;
		if(data){
			if(data.password === password){
				status= 'success';
			}else{
				errorType = 'password';
				errorMsg = 'password error'
			}
		}else{
			errorType='email';
			errorMsg= 'email error';
		}
		callback({status:status,errorType:errorType,errorMsg:errorMsg,data:data});
	})


}

Users.prototype.register = function(email,password,callback){
	UsersModel.findOne({email:email},function(err,data){
		if(err){
			console.log(err)
			return
		}
		console.log(data)
		var status= 'error';
		var errorType=null;
		var errorMsg = null;
		if(data){
			errorType='email';
			errorMsg= 'email is already used';
		}else{
			status= 'success';
			var user = new UsersModel;
			user.name = email;
			user.email = email;
			user.password = password;
			user.level = 2;
			user.save();
		}

		callback({status:status,errorType:errorType,errorMsg:errorMsg,data:data});
	})


}

usersInstance = new Users;
console.log('--------------require users--------------------')
module.exports=usersInstance;




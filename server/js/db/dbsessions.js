
var Store = require('express-session').Store
var util = require('util')
var db = require('./dbconnect.js')
var Schema = db.Schema;


var sessionsSchema = new Schema({
	sessionsID:String,
	data:{}
})

var SessionsModel = db.model('sessions',sessionsSchema);

// var test = new SessionsModel();
// test.save();

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

/**
 * Module exports.
 */



/**
 * A session store in memory.
 * @public
 */

function MongodbStore() {
  Store.call(this)

  // this.sessions = Object.create(null)
}

/**
 * Inherit from Store.
 */

util.inherits(MongodbStore, Store)

/**
 * Get all active sessions.
 *
 * @param {function} callback
 * @public
 */

MongodbStore.prototype.all = function all(callback) {
console.log('-----------------------111----------------')
console.log(SessionsModel)
console.log('-----------------------2----------------')
  // var sessionIds = Object.keys(this.sessions)
  	var sessions = Object.create(null)
	SessionsModel.find(null,'sessionsID data',function(err,data){
		console.log('-----------------------11111----------------')
		for(var i = 0; i < data.length; i++){
			if(data[i].sessionsID){
				var temp = {};
				if(data[i].data){
					temp = data[i].data;
				}
				sessions[data[i].sessionsID] = temp;
			}
		}
		console.log(sessions)
		callback && defer(callback, null, sessions)
	})
}

/**
 * Clear all sessions.
 *
 * @param {function} callback
 * @public
 */

MongodbStore.prototype.clear = function clear(callback) {
	console.log('-----------------------2----------------')
	SessionsModel.remove(function(err,doc){
		if(err){
			console.log(err);
		}
		callback && defer(callback)
	})
}

/**
 * Destroy the session associated with the given session ID.
 *
 * @param {string} sessionId
 * @public
 */

MongodbStore.prototype.destroy = function destroy(sessionId, callback) {
	console.log('-----------------------3----------------')
	SessionsModel.find({sessionsID:sessionId}).remove(function(err,doc){
		if(err){
				console.log(err);
		}
		callback && defer(callback)
	});
}

/**
 * Fetch session by the given session ID.
 *
 * @param {string} sessionId
 * @param {function} callback
 * @public
 */

MongodbStore.prototype.get = function get(sessionId, callback) {
	console.log('-----------------------4----------------')
	getSession.call(this, sessionId,function(sess){
		defer(callback, null, sess)
	})
 
}

/**
 * Commit the given session associated with the given sessionId to the store.
 *
 * @param {string} sessionId
 * @param {object} session
 * @param {function} callback
 * @public
 */

/**
 * Get number of active sessions.
 *
 * @param {function} callback
 * @public
 */

MongodbStore.prototype.length = function length(callback) {
	// console.log('-----------------------5----------------')
	SessionsModel.find().count(function(err,count){
		if(err){
				console.log(err);
		}
		callback(null, count)
	})
}

MongodbStore.prototype.set = function set(sessionId, session, callback) {
	// console.log('-----------------------6----------------')
	SessionsModel.findOne({sessionsID:sessionId},function(err,obj){
		if(err){
			console.log(err);
		}else{
			if(obj){
				console.log('set old------------')
				obj.data = session;
			}else{
				console.log('set new------------')
				obj = new  SessionsModel;
				obj.sessionsID = sessionId;
				obj.data = session;
			}
			obj.markModified('data');
			obj.save();
		}
	})

	// var query = SessionsModel.findOne({sessionsID:sessionId})
	// if(query){
	// 	console.log('-----------------------61----------------')
	// 	query.setOptions({ overwrite: true, multi: false }).update({$set:{data:session}},function(err,data){	
	// 		if(err){
	// 				console.log(err);
	// 		}
	// 		callback && defer(callback)
	// 	})
	// }else{
		// console.log('-----------------------62----------------')
		// var temp = new  SessionsModel();
		// temp.sessionsID = sessionId;
		// temp.data = session;
		// temp.save(function(err){
		// 	callback && defer(callback)
		// })
	// }
	


}

/**
 * Touch the given session object associated with the given session ID.
 *
 * @param {string} sessionId
 * @param {object} session
 * @param {function} callback
 * @public
 */

MongodbStore.prototype.touch = function touch(sessionId, session, callback) {
// console.log('-----------------------7----------------')
	getSession.call(this, sessionId,function(currentSession){
		if (currentSession) {
			currentSession.cookie = session.cookie

			this.set(sessionId,currentSession,function(){
				callback && defer(callback)
			})
		}
  	})

}

/**
 * Get session from the store.
 * @private
 */

function getSession(sessionId,callback) {
	// console.log('-----------------------8----------------')
	var that = this;
	SessionsModel.findOne({sessionsID:sessionId},function(err,data){
		var sess;
		if(data){
			sess = data.data
			if (sess) {
				var expires = typeof sess.cookie.expires === 'string'
					? new Date(sess.cookie.expires)
					: sess.cookie.expires
				// destroy expired session
				if (expires && expires <= Date.now()) {
					console.log('destroy------------')
					that.destroy(sessionId)
				}
				
			}
		}
		callback.call(that,sess)
	})
}


module.exports = MongodbStore


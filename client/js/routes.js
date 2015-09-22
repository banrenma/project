import cookieHelp from './cookie.js'
var routes = null;
// When you're finished, stop the listener.
class Routes{
	constructor(...args) {
		this.curPath = document.location.pathname + document.location.search ? document.location.pathname + document.location.search :'';
		this.event={};
		this.loginGoBackPath = '/';
		window.history.pushState(null,null, this.curPath)
	}

	gotoPath(path){
		this.curPath = path;
		this.emit('routes',path)
		window.history.pushState(null,null, this.curPath)
	}

	gotoLogin(){
		this.loginGoBackPath = document.location.pathname + document.location.search ? document.location.pathname + document.location.search :'';
		this.gotoPath('/user/login')
	}
	gotoLoginBack(){
		this.emit('cookie-userName')
		this.gotoPath(this.loginGoBackPath)
	}

	onpopstate(path){
		this.curPath = path;
		this.emit('routes',path)
	}

	getUrl(){
		var url = {};
		var pathArr = this.curPath.split('?');
		var componentArray = pathArr[0].split('/').splice(1);
		var param = {};
		if(pathArr[1]){
			_.each(pathArr[1].split('&'),function(v){
				var temp = v.split('=');
				param[temp[0]] = temp[1]
			})
		}
		url['componentArray'] = componentArray;
		url['param'] = param;
		console.log(url)
		return url;
	}

		


	on(eventName,displayName,handle){
		if(!this.event[eventName]){
			this.event[eventName] = {};
		}
		this.event[eventName][displayName] = handle;
	}	

	removeListen(eventName,displayName){
		if(this.event[eventName]){
			delete this.event[eventName][displayName];
		}
	}

	emit(eventName,param){
		if(this.event[eventName]){
			for(var key in this.event[eventName]){
				this.event[eventName][key](param);
			}
		}
	}

}

routes = new Routes;

window.onpopstate = function(event){
	// alert(document.location.pathname + document.location.search)
	// console.log(document.location)
	routes.onpopstate(document.location.pathname + document.location.search)
}

export default routes;





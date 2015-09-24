import cookieHelp from './cookie.js'
var routes = null;
// When you're finished, stop the listener.
class Routes{
	constructor(...args) {
		this.curPath = document.location.pathname + document.location.search ? document.location.pathname + document.location.search :'';
		this.event={};
		this.loginGoBackPath = '/';
		this.screenSizeType = 'lg';
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

	
	//判断当前的屏幕大小类型
	getScreenSizeType(){
		return this.screenSizeType;
	}	
	setScreenSizeType(screenSizeType){
		this.screenSizeType = screenSizeType;
		routes.emit('onresize',screenSizeType);
	}

	//事件处理函数
	on(eventName,object,handle){
		if(!this.event[eventName]){
			this.event[eventName] = {};
		}
		this.event[eventName][object] = handle;
	}	

	removeListen(eventName,object){
		if(this.event[eventName]){
			delete this.event[eventName][object];
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
export default routes;





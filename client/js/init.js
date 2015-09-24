
import routes from './routes.js'

window.onpopstate = function(event){
	// alert(document.location.pathname + document.location.search)
	// console.log(document.location)
	routes.onpopstate(document.location.pathname + document.location.search)
}

//监听窗口大小改变  
function getScreenSizeType(){

	var screenSizeType 
	if(window.getComputedStyle){
		screenSizeType = window.getComputedStyle(document.body, ":after").getPropertyValue("content");
	}

	if(!screenSizeType){
		if (window.innerWidth < 768) {
	        screenSizeType = 'xs'
	    } else if(window.innerWidth < 992) {
	        screenSizeType = 'sm'
	    }else if(window.innerWidth < 1200) {
	        screenSizeType = 'md'
	    }else {
	        screenSizeType = 'lg'
	    }
	}
	routes.setScreenSizeType(screenSizeType);
	

}

window.onresize = getScreenSizeType;
getScreenSizeType();
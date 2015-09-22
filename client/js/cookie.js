var cookieHelp = null;

class CookieHelp{
	setCookie(c_name,value,expiredays){
		var exdate=new Date()
		exdate.setDate(exdate.getDate()+expiredays)
		document.cookie=c_name+ "=" +escape(value)+
		((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
	}
	getCookie(c_name){
		if (document.cookie.length>0)
		{
			var c_start=document.cookie.indexOf(c_name + "=")
			if (c_start!=-1)
			{ 
				c_start=c_start + c_name.length+1 
				var c_end=document.cookie.indexOf(";",c_start)
				if (c_end==-1) c_end=document.cookie.length
				return unescape(document.cookie.substring(c_start,c_end))
			} 
		}
		return ""
	}
	deleteCookie(c_name){
		this.setCookie(c_name, "", -1);  
	}

}
cookieHelp = new CookieHelp;

export default cookieHelp
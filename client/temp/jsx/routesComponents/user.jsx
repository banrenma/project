

import LoginPage from '../components/login.jsx'
import BaseRoutes from './baseRoutes.jsx'

class User extends BaseRoutes{

	renderLogin(){
		return(
			<LoginPage activeKey={1} /> 
		);
	}
	renderRegister(){
		return(
			<LoginPage activeKey={2} /> 
		);
	}
}

export default User;
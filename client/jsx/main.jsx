'use strict';
// import React from 'react'
import routes from '../js/routes.js'
import Index from './routes/index.jsx'
// import User from './routesComponents/user.jsx'
import Error from './components/error.jsx'

class Main extends React.Component{

	static displayName = 'Main';
	state = routes.getUrl();

	handleChangePath(path){
		this.setState(routes.getUrl())
	}

	componentDidMount() {
		routes.on('routes', this,this.handleChangePath.bind(this));
	}

	componentWillUnmount() {

		routes.removeListen('routes', this);
	}


	// renderUser(){
	// 	return(
	// 		<User componentArray ={this.state.componentArray.slice(1)}/>
	// 	);
	// }
	renderIndex(){
	
		return(
			<Index componentArray ={this.state.componentArray.slice(1)}/>
		);
	}
	renderError(){
		return(
			<Error errorMessage = {"can not find React Component " + this.state.componentArray[0]} />
		);
	}

	render(){
		var handleName = 'render'+ (this.state.componentArray[0] ? this.state.componentArray[0].replace(/(\w)/,function(v){return v.toUpperCase()}):'Index');
		if(!this[handleName]){
			handleName = 'renderError';
		}
		return this[handleName]();

	}

}

export default Main;



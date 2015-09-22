'use strict';
// import React from 'react'
import routes from '../js/routes.js'
import Index from './routesComponents/index.jsx'
import User from './routesComponents/user.jsx'
import Error from './components/error.jsx'

class Main extends React.Component{

	constructor(...args){
		super(...args);
		this.displayName = 'Main';

		this.state = routes.getUrl();
		console.log(this.state)
	}

	getPathAndParam(){

	}
	

	handleChangePath(path){
		this.setState(routes.getUrl())
	}

	componentDidMount() {
		routes.on('routes', this.displayName,this.handleChangePath.bind(this));
	}

	componentWillUnmount() {

		routes.removeListen('routes', this.displayName);
	}


	renderUser(){
		return(
			<User componentArray ={this.state.componentArray.slice(1)}/>
		);
	}
	renderIndex(){
	
		return(
			<Index componentArray ={this.state.componentArray.slice(1)}/>
		);
	}
	renderError(){
		return(
			<Error componentName ={this.state.componentArray[0]}/>
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



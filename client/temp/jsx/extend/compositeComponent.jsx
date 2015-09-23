//组合组件父类
// import React from 'react'

class CompositeComponent extends React.Component {

	constructor(...args){
		super(...args);
		this.state = {
			children:{}
		}
		this.children = {};
		this.test=['111','2222']
	}

	addChild(name,props){
		this.children[name] = props;
		this.setState({children:this.children})
	}

	// removeChild(name){
	// 	delete this.children[name];
	// 	this.setState({children:this.children})
	// }
} 

export default CompositeComponent;
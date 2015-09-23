
import React from 'react'

import CompositeComponent from '../extend/compositeComponent.jsx'

class Testaa extends React.Component {

	render(){
		return (
      <h1> {this.props.title} </h1>
    );
	}
}


class Test extends CompositeComponent{
	// constructor(...args){
	// 	super(...args);
	// }

	handleClick(e){
		this.addChild('Testaa',{title:'nieming'})
	}

	addAA(){
		var com = [];
		for (var key in this.state.children){
			com.push(
					<Testaa title='nieming' />
				);
		}
		return com
	}

	render(){
		var com = this.addAA();
		return (
      		<div> 
      			<div>{com}</div> 
      			<button onClick={this.handleClick.bind(this)}>点击我</button>
      		</div>
    	);
	}

}
console.log(CompositeComponent);

export default Test;
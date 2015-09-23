
import Error from '../components/error.jsx'
class BaseRoutes extends React.Component{

	renderError(){
		return(
			<Error componentName ={this.props.componentArray[0]}/>
		);
	}

	render(){
		console.log(this.props)
		var handleName = 'render'+ (this.props.componentArray[0] ? this.props.componentArray[0].replace(/(\w)/,function(v){return v.toUpperCase()}):'Index');
		if(!this[handleName]){
			handleName = 'renderError';
		}
		return this[handleName]();
	}

}

export default BaseRoutes
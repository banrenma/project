

class Input extends React.Component{
	static propTypes ={
		children:React.PropTypes.any,
		size:React.PropTypes.oneOf(['lg','sm']),
		onFocus:React.PropTypes.func,
		onClick:React.PropTypes.func,
		onBlur:React.PropTypes.func,
		disabled:React.PropTypes.bool,
		//对于checkbox  true
		value:React.PropTypes.any,
		
	}
	static defaultProps = {
		hasFeedback='ture'

	}
	state={
		checkState:this.props.checkState,
		value:undefined,
		disabled:this.props.disabled,
	}
	

	getInputDomNode(){

	}
	handlieOnFocus(){
		if(!this.state.disabled && this.props.onFocus){
			this.props.onFocus()
		}
	}
	handlieonClick(){
		if(!this.state.disabled && this.props.onClick){
			this.props.onClick()
		}
	}
	handlieonBlur(){
		if(!this.state.disabled && this.props.onBlur){
			this.props.onBlur()
		}	
	}

	setValue(){


	}

	getValue(){


	}



	render(){
		let {size,onFocus,onClick,onBlur,disabled,value,isInline,checkState,children,...other} = this.props;
		classNameVar = Classnames(
		
		)
		<input {...other} 
		onFocus = {this.handlieOnFocus.bind(this)} 
		onClick = {this.handlieonClick.bind(this)}
		onBlur = {this.handlieonBlur.bind(this)}



		/>

		var component
		if(this.props.label){
			component = (
				<label>this.props.label
					
				</label>

			)
		}

		return(
		

		)
		
	}
}

export default Button;
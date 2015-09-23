

class Button extends React.Component{
	static propTypes ={
		children:React.PropTypes.any,
		renderElement:React.PropTypes.oneOf(['a','button','input']),
		btnType:React.PropTypes.oneOf(['button', 'reset', 'submit']),
		btnStyle:React.PropTypes.oneOf(['default','primary','info','success','warning','danger','link']),
		btnSize:React.PropTypes.oneOf(['default','lg','sm','xs']),
		btnState:React.PropTypes.oneOf(['default','active','disabled']),
		isBtnBlock:React.PropTypes.bool,
		isBtnDropDown:React.PropTypes.bool,
		btnName:React.PropTypes.string,
		onClick:React.PropTypes.func,
		href:React.PropTypes.string,
		className:React.PropTypes.string
	}
	static defaultProps = {
		renderElement:'button',
		btnType:'button',
		btnStyle:'default',
		btnSize:'default',
		btnState:'default',
		
	}

	state = {
		btnState:this.props.btnState,
		btnName:this.props.btnName
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.btnState !== this.props.btnState) {
			this.setState({ btnState: nextProps.btnState })
		}
		if (nextProps.btnName !== this.props.btnName) {
			this.setState({ btnName: nextProps.btnName })
		}
	}

	handleOnClick(){
		if(this.state.btnState !== 'disabled' && this.props.onClick){
			this.props.onClick()
		}
	}


	getClassNames(){
		const className = Classnames(
			'btn',
			'btn-' + this.props.btnStyle,
			this.props.btnSize==='default'?null :'btn-' + this.props.btnSize,
			this.props.btnState==='default'? null :this.props.btnState,
			this.props.isBtnBlock ? 'btn-block' : null,
			this.props.isBtnDropDown?'dropdown-toggle':null,
			this.props.className
		)

		return className
	}

	render(){

		let Component = this.props.renderElement;
		return (
			<Component
				className={this.getClassNames()}
				onClick={this.handleOnClick.bind(this)}
				value={Component === 'input' ? this.state.btnName : null}
				disabled={this.props.btnState ==='disabled' ? this.props.btnState : null }
				href = {this.props.href}
				type = {Component === 'a' ? null: this.props.btnType }
				>
				{Component === 'input'?null:this.state.btnName}
				{this.props.children}
			</Component>
			
		);
	}


}

export default Button;
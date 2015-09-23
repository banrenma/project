

class InputGroup extends React.Component{
	static propTypes ={
		children:React.PropTypes.any,
		size:React.PropTypes.oneOf(['lg','sm']),
		addonBeforeElement:React.PropTypes.element,
		addonAfterElement:React.PropTypes.element,
	}


	
	let classNameVar = Classnames(
		'input-group',
		this.props.size ? 'input-group-' + this.props.size :null
	)
	let inputClassNameVar = Classnames(
		'form-control',
		this.props.className
	）
	let {size,headElement,children,tailElement,className,...other} = this.props;
	render(){
		return(
			<div className = {classNameVar}>
				{this.props.addonBeforeElement}
				<input className={inputClassNameVar} {...other} />
				{this.props.addonAfterElement}
			</div>

		)
		
	}
}

export default Button;
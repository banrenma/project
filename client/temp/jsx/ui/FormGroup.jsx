

class FormGroup extends React.Component{

	

	render(){
		let classNameVar = Classnames(
			'form-group',
			this.props.className
		)
		let {className,children,...other} = this.props
		return(
			<div className = {classNameVar} {...other}>
				{this.props.children}
			</div>
		)
	}
}

export default FormGroup;
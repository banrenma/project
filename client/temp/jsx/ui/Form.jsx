

class Form extends React.Component{

	static propTypes ={
		children:React.PropTypes.any,
		formType:React.PropTypes.Oneof(['inline','horizontal']),
	}

	render(){
		let classNameVar = Classnames(
			this.props.formType ? 'form-' + this.props.formType :null
		)
		let {className,children,...other} = this.props
		return(
			<form className = {classNameVar} {...other}>
				{this.props.children}
			</form>


		)
	}
}

export default Form;

class DropDownMenuItem extends React.Component{
	static propTypes ={
		children:React.PropTypes.any,
		eventKey:React.PropTypes.any,
		disabled:React.PropTypes.bool,
		isSeparator:React.PropTypes.bool
	}
	static defaultProps = {
		disabled:false,
		isSeparator:false
	}
	state={

		disabled:this.props.disabled,
	}

	handleOnClick(event){
		if(this.props.onClick){
			this.props.onClick(event,this.props.eventKey)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.disabled !== this.props.disabled) {
			this.setState({ disabled: nextProps.disabled })
		}
		
	}

	render(){

		let {isSeparator,disabled,children,className,...other} = this.props;

		let classNameVar = Classnames(
			{'divider':this.props.isSeparator},
			{'disabled':this.props.disabled},
			this.props.className
		)

		return (
			<li className = {classNameVar} >
				{this.props.isSeparator?  undefined :<a {...this.other} onClick = {this.handleOnClick.bind(this)}>{this.props.children}</a> }
			</li>
		);
	}

}


export default DropDownMenuItem;
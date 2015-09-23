

class FontIcon extends React.Component{
	static propTypes ={
		iconName:React.PropTypes.string.isRequired

	}
	
	state = {
		iconName:this.props.iconName,
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.iconName !== this.props.iconName) {
			this.setState({ iconName: nextProps.iconName })
		}
	}

	render(){
		let className = Classnames(
			'glyphicon',
			'glyphicon-' + this.state.iconName
		)
		return (
			<span className={className} ></span>

		);
	}
}

export default FontIcon;
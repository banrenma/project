

class DropDownMenu extends React.Component{

	static propTypes ={
		children:React.PropTypes.any,
		isOpen:React.PropTypes.bool,
		isUp:React.PropTypes.bool,
		triggerElement:React.PropTypes.element.isRequired,
		onClickMenuItem:React.PropTypes.func
	}
	static defaultProps = {
		triggerStyle:'onClick',
		isOpen:false,
		isUp:false
	}

	state = {
		isOpen:this.props.isOpen,
	}

	onClickMenuItem(event,key){
		if(this.props.onClickMenuItem){
			this.props.onClickMenuItem(event,key)
		}
		this.setState({isOpen:!this.state.isOpen})
	}

	componentWillReceiveProps(nextProps, nextState){
		this.setState({isOpen:!this.state.isOpen})
	}


	render(){

		let classNameVar = Classnames(
			this.props.isUp? 'dropup' :'dropdown',
			{'open':this.state.isOpen},
			this.props.className
		)
		
		let listElement = [];
		React.Children.forEach(this.props.children,function(child){
			
			listElement.push(React.cloneElement(child,
				{eventKey:child.key,onClick:this.onClickMenuItem.bind(this)}
			));
		}.bind(this))

		

		return(
			<div className={classNameVar}>
				{this.props.triggerElement}
				<ul className = 'dropdown-menu' >
					{listElement}
				</ul>
			</div>
		);

	}

}
export default DropDownMenu;
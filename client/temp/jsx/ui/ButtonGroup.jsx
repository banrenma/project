


class ButtonGroup extends React.Component{


	static propTypes ={
		children:React.PropTypes.any,
		isVertical:React.PropTypes.bool,
		isToolBar:React.PropTypes.bool,
		isJustified:React.PropTypes.bool
	}
	static defaultProps = {
		isVertical:false,
		isToolBar:false,
		// isJustified 对于 a标签  可以直接应用  对于button  必须将每个按钮包裹进一个按钮组中
		isJustified:false
	}
	
	render(){
		console.log('this.refs',this.refs)
		let classNameVar = Classnames(
			this.props.isToolBar ? 'btn-toolbar' : ( this.props.isVertical ? 'btn-group-vertical' : 'btn-group'),
			this.props.isJustified ? 'btn-group-justified': null
		)
		return(
			<div className={classNameVar} 
				role={ this.props.isToolBar ? 'toolbar' : 'group'}>
				{this.props.children}
			</div>
		)
	
	}
}

export default ButtonGroup;
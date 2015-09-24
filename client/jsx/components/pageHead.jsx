
import routes from '../../js/routes.js'

class PageHead extends React.Component{

	state={
		sizeType:routes.getScreenSizeType()
	}
	
	componentDidMount() {
		routes.on('onresize', this,this.handleOnResize.bind(this));

	}

	componentWillUnmount() {

		routes.removeListen('onresize', this);
	}


	handleOnResize(sizeType){
		this.setState({sizeType:sizeType})
	}





	render_xs(){
		return (
			<div>
				<h2>xssssss</h2>
			</div>
		)
	}

	render(){
		if(this.state.sizeType === 'xs'){
			return this.render_xs();
		}
		return (
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						
					</div>
				</div>
			</nav>
		)
	}


}

export default PageHead;
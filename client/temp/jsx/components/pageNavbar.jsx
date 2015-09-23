
import routes from '../../js/routes.js'
import cookieHelp from '../../js/cookie.js'
import Navbar from 'react-bootstrap/lib/Navbar.js'
import Nav from 'react-bootstrap/lib/Nav.js'
import NavItem from 'react-bootstrap/lib/NavItem.js'
import DropdownButton from 'react-bootstrap/lib/DropdownButton.js'
import MenuItem from 'react-bootstrap/lib/MenuItem.js'
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-bootstrap/lib/Modal.js'
import Button from 'react-bootstrap/lib/Button.js'
class PageNavBar extends React.Component{
	constructor(...args) {
		super(...args);
		this.displayName = 'PageNavBar';
		this.linkPath = {
			order:'/user/order',
			shopping:'/user/shopping',
			info:'/user/info',
			logout:'/user/logout',
			login:'/user/login',
			register:'/user/register'
		}
		this.state = {
			userName:cookieHelp.getCookie('userName'),
			showModal:false
		};
	}
	handleShowUserName(){
		//读取cookie 里面的userName
		this.setState({userName:cookieHelp.getCookie('userName')})
	}
	componentDidMount() {
		routes.on('cookie-userName', this.displayName,this.handleShowUserName.bind(this));
	}

	componentWillUnmount() {

		routes.removeListen('cookie-userName', this.displayName);
	}

	handOnSelect(e){
		console.log(e)
		switch(e){
			case 'logout':
				$.post('../api/users/logout',function(data,textStatus,jqXHR){
					alert(1)
					routes.gotoLogin();
				}.bind(this))
				break;
			case 'aboutUs':
				this.handleShowModal()
				break;
			case 'shopping':
				
				break;
			default:
				routes.gotoPath(this.linkPath[e] ? this.linkPath[e] : '')
				break;
		}
	}

	handleOnClickBrand(e){
		e.preventDefault();
		routes.gotoPath('/')
	}

	handleShowModal(){
		this.setState({showModal:true})
	}
	handleCloseModal(){
		this.setState({showModal:false})
	}
	renderAboutUs(){
		return(
			<Modal show={this.state.showModal} onHide={this.handleCloseModal.bind(this)} enforceFocus ={false}>
				<Modal.Header closeButton>
					<Modal.Title>关于我们</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>这是聂明的个人商铺网站</h4>
					<p>你可以在这里购物! 发现bug可以提交到501182555@qq.com 邮箱  或者 直接拨打电话 18589035825</p>

				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.handleCloseModal.bind(this)}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	renderBrand(){
		return(
			<a onClick={this.handleOnClickBrand.bind(this)}>聂明的个人商铺</a>
		)
	}
	renderUser(){
		return(
			<div className='row'>
				<Navbar brand={this.renderBrand()}  toggleNavKey={0} >
					<Nav right eventKey={0}> {/* This is the eventKey referenced */}
						<NavItem  eventKey={'order'} onSelect={this.handOnSelect.bind(this)}>我的历史订单</NavItem> 
						<NavItem eventKey={'shopping'} onSelect={this.handOnSelect.bind(this)}> <Glyphicon glyph="shopping-cart" />购物车</NavItem> 
				   	 	<NavItem eventKey={'info'} onSelect={this.handOnSelect.bind(this)}>{this.state.userName}</NavItem> 
						<NavItem eventKey={'logout'} onSelect={this.handOnSelect.bind(this)}>退出</NavItem> 
						<NavItem eventKey={'aboutUs'} onSelect={this.handOnSelect.bind(this)}>关于我们</NavItem> 
				    </Nav>
				</Navbar>
				{this.renderAboutUs()}
			</div>
		)
	}
	renderTourist(){
		return(
			<div className='row'>
				<Navbar brand={this.renderBrand()} toggleNavKey={0}  >
					<Nav right eventKey={0}> {/* This is the eventKey referenced */}
						<NavItem eventKey={'shopping'} onSelect={this.handOnSelect.bind(this)}><Glyphicon glyph="shopping-cart" />购物车</NavItem> 
				   	 	<NavItem eventKey={'login'} onSelect={this.handOnSelect.bind(this)}>登录</NavItem> 
						<NavItem eventKey={'register'} onSelect={this.handOnSelect.bind(this)}>注册</NavItem> 
						<NavItem eventKey={'aboutUs'} onSelect={this.handOnSelect.bind(this)}>关于我们</NavItem> 
				    </Nav>
				</Navbar>
				{this.renderAboutUs()}
			</div>
		)
	}
	render(){
		if(this.state.userName){
			return this.renderUser();
		}else{
			return this.renderTourist();
		}
	}
}
export default PageNavBar
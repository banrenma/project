
import PageHeader from 'react-bootstrap/lib/PageHeader.js'
import Carousel from 'react-bootstrap/lib/Carousel.js'
import CarouselItem from 'react-bootstrap/lib/CarouselItem.js'
import Tab from 'react-bootstrap/lib/Tab.js'
import Tabs from 'react-bootstrap/lib/Tabs.js'
import Input from 'react-bootstrap/lib/Input.js'
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import PageFooter from './pageFooter.jsx'
import routes from '../../js/routes.js'


class Login extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			emailStyle:0,
			passwordStyle:0,
			errorType:'',
			errorMsg:''
		};
	}
	handlePost(e){
		e.preventDefault()
		if(this.state.emailStyle === 1 && this.state.passwordStyle === 1 ){
			$.post('../api/users/login',{email:this.refs.emailInput.getValue(),password:this.refs.passwordInput.getValue()},function(data,textStatus,jqXHR){
				if(data.status === 'success'){
					routes.gotoLoginBack();
				}else{
					this.setState({errorType:data.errorType,errorMsg:data.errorMsg})
					if(data.errorType !== ''){
						if(data.errorType === 'email'){
							var domNode = this.refs.emailInput.getInputDOMNode();
							
							domNode.value = '';
							domNode.focus();
							this.setState({emailStyle:2})

						}else if(data.errorType === 'password'){
							var domNode = this.refs.passwordInput.getInputDOMNode();
							domNode.value = '';
							domNode.focus();
							this.setState({passwordStyle:2})
						}
					}

				}

			}.bind(this))
			
		}else{
			this.checkEmail();
			this.checkPassword();
		
		}	

	}

	clearText(){
		this.refs.emailInput.getInputDOMNode().value=''
		this.refs.passwordInput.getInputDOMNode().value=''
		this.setState({emailStyle:0,passwordStyle:0,errorType:'',errorMsg:''})
	}

	renderError(){
		if(this.state.errorType !== ''){
			return(<p className = 'text-danger'> {this.state.errorMsg} </p>)
		}
	}

	checkEmail(e){
		if(this.state.errorType === 'email'){
			this.setState({errorType:'',errorMsg:''})
		}
		if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.refs.emailInput.getValue())){
			this.setState({emailStyle:2})
		}else
		{
			this.setState({emailStyle:1})
		}
	}
	checkPassword(e){
		if(this.state.errorType === 'password'){
			this.setState({errorType:'',errorMsg:''})
		}
		if(this.refs.passwordInput.getValue().length < 6){
			this.setState({passwordStyle:2})

		}else
		{
			this.setState({passwordStyle:1})
		}
	}
	componentWillReceiveProps(){
		if(this.props.isNeedClear){
			this.clearText();
		}
	}

	getValidationState(state){
		if(state === 1){
			return 'success'
		}else if(state === 2){
			return 'error'
		}
	}

	render(){
		return(
			<form  method='POST'>
				{this.renderError()}
				<Input type='email' label='Email:' name = 'email' labelClassName='label-class' groupClassName='group-class'  bsStyle={this.getValidationState(this.state.emailStyle)} placeholder='Enter email' onChange={this.checkEmail.bind(this)} ref = 'emailInput' hasFeedback />
				<Input type='password' label='Password:' name = 'password' labelClassName='label-class' groupClassName='group-class' bsStyle={this.getValidationState(this.state.passwordStyle)} placeholder='Password' onChange={this.checkPassword.bind(this)} ref = 'passwordInput' hasFeedback />
				<a href='#' className ='display-block text-right'>忘记密码?</a>
				<button type='submit' className='btn btn-primary center-block' onClick={this.handlePost.bind(this)}> &emsp;&emsp;&emsp;登录&emsp;&emsp;&emsp; </button>
			</form>
		);
	}

}


class Register extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			emailStyle:0,
			passwordStyle:0,
			passwordAgainStyle:0,
			checkedStyle:0,
			errorType:'',
			errorMsg:''
		};
	}
	handlePost(e){
		e.preventDefault()
		
		if(this.state.emailStyle === 1 && this.state.passwordStyle === 1 && this.state.passwordAgainStyle === 1 && this.state.checkedStyle === 1 ){
			$.post('../api/users/register',{email:this.refs.emailInput.getValue(),password:this.refs.passwordInput.getValue()},function(data,textStatus,jqXHR){
				if(data.status === 'success'){
					routes.gotoLoginBack();
				}else{
					this.setState({errorType:data.errorType,errorMsg:data.errorMsg})
					if(data.errorType !== ''){
						if(data.errorType === 'email'){
							var domNode = this.refs.emailInput.getInputDOMNode();
							
							domNode.value = '';
							domNode.focus();
							this.setState({emailStyle:2})

						}
					}

				}

			}.bind(this))
		}else{
			this.checkEmail();
			this.checkPassword();
			this.checkPasswordAgain();
			this.checkCheckBox();
		}

	}

	clearText(){
		this.refs.emailInput.getInputDOMNode().value=''
		this.refs.passwordInput.getInputDOMNode().value=''
		this.refs.passwordAgainInput.getInputDOMNode().value=''
		React.findDOMNode(this.refs.checkbox).checked = false;
		this.setState({
			emailStyle:0,
			passwordStyle:0,
			passwordAgainStyle:0,
			checkedStyle:0,
			errorType:'',
			errorMsg:''
		})
	
	}
	componentWillReceiveProps(){
		if(this.props.isNeedClear){
			this.clearText();
		}
	}
	renderError(){
		if(this.state.errorType !== ''){
			return(<p className = 'text-danger'> {this.state.errorMsg} </p>)
		}
	}

	checkEmail(e){
		if(this.state.errorType === 'email'){
			this.setState({errorType:'',errorMsg:''})
		}
		if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.refs.emailInput.getValue())){
			this.setState({emailStyle:2})
		}else
		{
			this.setState({emailStyle:1})
		}
	}
	checkPassword(e){
		if(this.refs.passwordInput.getValue().length < 6){
			this.setState({passwordStyle:2})

		}else
		{
			this.setState({passwordStyle:1})
		}
	}
	checkPasswordAgain(e){
		if(!(this.refs.passwordInput.getValue() === this.refs.passwordAgainInput.getValue() && this.state.passwordStyle === 1)){
			this.setState({passwordAgainStyle:2})
		}else
		{
			this.setState({passwordAgainStyle:1})
		}
	}
	checkCheckBox(){
		if(!React.findDOMNode(this.refs.checkbox).checked){
			this.setState({checkedStyle:2})
		}else
		{
			this.setState({checkedStyle:1})
		}
	}

	getValidationState(state){
		if(state === 1){
			return 'success'
		}else if(state === 2){
			return 'error'
		}
	}
	renderCheckBoxIcon(){
		if(this.state.checkedStyle === 2){
			return <Glyphicon className ='text-danger glyphicon-pull-right' glyph="remove" />;
		}
	}
	render(){
		return(
			<form  method='POST'>
				{this.renderError()}
				<Input type='email' label='Email:' name = 'email' labelClassName='label-class' groupClassName='group-class'  bsStyle={this.getValidationState(this.state.emailStyle)} placeholder='Enter email' onChange={this.checkEmail.bind(this)} ref = 'emailInput' hasFeedback />
				<Input type='password' label='Password:' name = 'password' labelClassName='label-class' groupClassName='group-class' bsStyle={this.getValidationState(this.state.passwordStyle)} placeholder='Password' onChange={this.checkPassword.bind(this)} ref = 'passwordInput' hasFeedback />
				<Input type='password' label='PasswordAgain:' name = 'PasswordAgain' labelClassName='label-class' groupClassName='group-class' bsStyle={this.getValidationState(this.state.passwordAgainStyle)} placeholder='PasswordAgain' onChange={this.checkPasswordAgain.bind(this)} ref = 'passwordAgainInput' hasFeedback />
				
				<div className='form-group'>
					<input type='checkbox' ref = 'checkbox' id = 'checkbox' onClick={this.checkCheckBox.bind(this)} />
					<label for='checkbox'>&emsp;&emsp;</label>
					<a href='#' className={this.state.checkedStyle === 2?'text-danger':null} >我已阅读用户协议</a>
					{this.renderCheckBoxIcon()}
				</div>
				<button type='submit' className='btn btn-primary center-block' onClick={this.handlePost.bind(this)}> &emsp;&emsp;&emsp;登录&emsp;&emsp;&emsp; </button>
			</form>
		);
	}

}

class LoginComponent extends React.Component{

	constructor(...args) {
		super(...args);
		this.state = {
			activeKey:this.props.activeKey,
			isNeedClear:true
		};
	}
	
	handleSelect(key){

		this.setState({activeKey:key});

	}
	renderLogin(){
		return(
			<form  method='POST'>
				<Input type='email' label='Email:' name = 'email' placeholder='Enter email'  hasFeedback />
				<Input type='password' label='Password:' name = 'password' placeholder='Password' hasFeedback />
				<a href='#' className ='display-block text-right'>忘记密码?</a>
				<button type='submit' className='btn btn-primary center-block'> &emsp;&emsp;&emsp;登录&emsp;&emsp;&emsp; </button>
			</form>
		);
	}
	
	renderTabs(){
		return(
			<Tabs activeKey = {this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
				<Tab eventKey={1} title='登 录'><Login isNeedClear={this.state.isNeedClear} /></Tab>
				<Tab eventKey={2} title='注 册'><Register isNeedClear={this.state.isNeedClear} /></Tab>
			</Tabs>
		)

	}
	render(){
		return(
			<div className = 'border-box'>
				{this.renderTabs()}
			</div>
		);

	}
}




class LoginPage extends React.Component{
	renderPageHead(){
		return (
			<PageHeader> 欢迎来到聂明的货铺 <small>welcome to nieming shop</small></PageHeader>
		);
	}
	renderPageFooter(){
		return (
			<PageFooter />
		);
	}

	renderCarousel(){
		return(
			
				<Carousel className = 'hidden-sm'>
					<CarouselItem>
						<img width={420} height={420} alt='image' className = 'center-block' src='/image/skin/300030.png'/>
						<div className='carousel-caption'>
							<h3 className='text-info'>First slide label</h3>
							<p className='text-info'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</CarouselItem>
					<CarouselItem>
						<img width={420} height={420} alt='image' className = 'center-block' src='/image/skin/300031.png'/>
						<div className='carousel-caption'>
							<h3 className='text-info'>Second slide label</h3>
							<p className='text-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</CarouselItem>
					<CarouselItem>
						<img width={420} height={420} alt='image' className = 'center-block' src='/image/skin/300032.png'/>
						<div className='carousel-caption'>
							<h3 className='text-info'>Third slide label</h3>
							<p className='text-info'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</div>
					</CarouselItem>
					<CarouselItem>
						<img width={420} height={420} alt='image' className = 'center-block' src='/image/skin/300033.png'/>
						<div className='carousel-caption'>
							<h3 className='text-info'>Third slide label</h3>
							<p className='text-info'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</div>
					</CarouselItem>
				</Carousel>

		);

	}
	renderLogin(){

		return(
			<div className='row'>
				<div className='col-xs-12 col-sm-7 col-md-8 '>
					{this.renderCarousel()}
				</div>
				<div className='col-xs-12 col-sm-5 col-md-4'>
					<LoginComponent activeKey={this.props.activeKey} />
				</div>
				
			</div>
		);
	}


	render(){
		// React.Children.map(this.props.children,function(child){
		// 	console.log(child)
		// })
		// console.log('----------------')
		// console.log(this.props)
		return (
			<div>
				{this.renderPageHead()}
				{this.renderLogin()}
				{this.renderPageFooter()}
			</div>
		)
	}

}

export default LoginPage

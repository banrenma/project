
import Button from '../ui/Button.jsx';

class ButtonTest extends React.Component{

	state={
		btnName:"aa"
	}

	handleOnClick(){
		alert(this.state.btnName)
	}
	handleOnClick1(){
		this.setState({btnName:'changeName'})
	}
	render(){
		return (
			<div>
				<button className='btn'>aaaaaa</button>
				<Button onClick={this.handleOnClick.bind(this)} className='test1 test2'  > <p>test</p></Button>
				<Button onClick={this.handleOnClick1.bind(this)} btnStyle={'primary'} btnName={this.state.btnName} />
				<Button onClick={this.handleOnClick.bind(this)}  btnSize ={'lg'} />
				<Button onClick={this.handleOnClick.bind(this)}  btnState = {'disabled'} btnStyle={'danger'} />
				<Button onClick={this.handleOnClick.bind(this)}  isBtnBlock = {true} />
				<Button onClick={this.handleOnClick.bind(this)}  renderElement = {'a'} btnStyle={'danger'}  href='http://www.baidu.com'/>
				<Button onClick={this.handleOnClick.bind(this)}  renderElement = {'input'} btnType={'submit'} btnStyle={'danger'} btnState = {'disabled'} />
				<Button onClick={this.handleOnClick.bind(this)}  renderElement = {'input'} btnType={'reset'} btnStyle={'danger'} btnState = {'disabled'} />
			</div>


		)

	}
}

export default ButtonTest;
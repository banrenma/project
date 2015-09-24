//错误处理组件
import routes from '../../js/routes.js'
class Error extends React.Component{
	handleOnClick(){
		routes.gotoPath("/")
	}
	render(){
		console.log(routes)
		return (
			<div className = 'container'>
				<h2 className='text-danger'>Error Message:</h2>
				<pre>{this.props.errorMessage}</pre>
				<button className='btn btn-primary' onClick={this.handleOnClick}>返回主页</button>
			</div>

		);

	}

}

export default Error;
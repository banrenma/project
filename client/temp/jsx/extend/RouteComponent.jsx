//继承组合组件  从子组件 选择一个组件渲染
// import React from 'react'
import routes from '../js/routes.js'

class RouteComponent extends React.Component {


	render(){
		return this['render'+ (this.props.pathArray.slice(0,1)[0] ? this.state.pathArray.slice(0,1)[0].replace(/(\w)/,function(v){return v.toUpperCase()}):'Index')]();

	}

	
} 

export default RouteComponent;
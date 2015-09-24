// import React from 'react'
import routes from '../../js/routes.js'
import BaseRoutes from './baseRoute.jsx'

import PageHead from '../components/pageHead.jsx'

class Index extends BaseRoutes {



	state={
		text:'index'
	}

	


	handleOnClick(){
		routes.gotoPath("/fdfdfd")
	}
	


	renderIndex(){
		return (
			<div>
				<PageHead />
				<h1>{this.state.text}</h1>
				<button className='btn btn-primary' onClick={this.handleOnClick}>返回主页</button>
		    </div>
	    );
	}


}

export default Index;
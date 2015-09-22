// import React from 'react'
import routes from '../../js/routes.js'
import BaseRoutes from './baseRoutes.jsx'
import PageNavBar from '../components/pageNavBar.jsx'
import PageSearch from '../components/pageSearch.jsx'
import Shelf from '../components/shelf.jsx'
class Index extends BaseRoutes {

	handleclick(){
		routes.gotoPath('/user');
	}
	renderIndex(){
		return (
			<div>
				<PageNavBar />
				<PageSearch />
				<Shelf />
		    
		    </div>
	    );
	}
}

export default Index;
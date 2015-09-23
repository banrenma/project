//货架
import Tab from 'react-bootstrap/lib/Tab.js'
import Tabs from 'react-bootstrap/lib/Tabs.js'
import Goods from './goods.jsx'

// 
class Shelf extends React.Component{


	render(){
		return(
			<Tabs defaultActiveKey={1} position='left' tabWidth={2} paneWidth={10}>
				<Tab eventKey={1} title='饮 料'>
					<div className='row'>
						<div className="col-xs-6 col-sm-6 col-md-2">
							<Goods imgName = {'/image/skin/kele.jpg'} title={'百事可乐'} discribe={'这是一瓶百事可乐'} price = {3} />
						</div>
						<div className="col-xs-6 col-sm-6 col-md-2">
							<Goods imgName = {'/image/skin/kele.jpg'} title={'百事可乐'} discribe={'这是一瓶百事可乐'} price = {3} />
						</div>
						<div className="col-xs-6 col-sm-6 col-md-2">
							<Goods imgName = {'/image/skin/kele.jpg'} title={'百事可乐'} discribe={'这是一瓶百事可乐'} price = {3} />
						</div>
						<div className="col-xs-6 col-sm-6 col-md-2">
							<Goods imgName = {'/image/skin/kele.jpg'} title={'百事可乐'} discribe={'这是一瓶百事可乐'} price = {3} />
						</div>
					</div>
				</Tab>
				<Tab eventKey={2} title='小 吃'>Tab 2 content</Tab>
				<Tab eventKey={3} title='早 餐'>Tab 3 content</Tab>
				<Tab eventKey={4} title='早 餐'>Tab 3 content</Tab>
			</Tabs>
		)


	}
}

export default Shelf;


import Button from '../ui/Button.jsx';

import ButtonGroup from '../ui/ButtonGroup.jsx';
import DropDownMenu from '../ui/DropDownMenu.jsx';
import DropDownMenuItem from '../ui/DropDownMenuItem.jsx';

class DropMenuTest extends React.Component{

	state={
		isOpen:false,
	}

	OpenMenu(){
		
		this.setState({isOpen:!this.state.isOpen})
	}
	onClickMenuItem(event,key){
		
		console.log('refs   ',this.refs)
	}

	render(){
		console.log('DropMenuTest',this.refs);
		return (
			<div>
				<DropDownMenu  isOpen = {this.state.isOpen} triggerElement={ 
					<ButtonGroup >
						<Button > test </Button> 
						<Button onClick={this.OpenMenu.bind(this)} > <span className="caret"> </span></Button> 
					</ButtonGroup>
				} onClickMenuItem = {this.onClickMenuItem.bind(this)} >
					<DropDownMenuItem key={'test1'}>test1</DropDownMenuItem>	
					<DropDownMenuItem key={'separator'} isSeparator={true}></DropDownMenuItem>	
					<DropDownMenuItem key={'test2'}>test2</DropDownMenuItem>	
				</DropDownMenu>

			</div>

		)

	}
}

export default DropMenuTest;
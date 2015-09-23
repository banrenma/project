

import Button from '../ui/Button.jsx';
import ButtonGroup from '../ui/ButtonGroup.jsx';
class ButtonGroupTest extends React.Component{
	render(){
		
		return (

			<div>
				<ButtonGroup isJustified={true}>
					<Button  className='test1 test2'  btnName='isJustified'  renderElement='a'> </Button>
					<Button  btnStyle={'primary'} btnName='isJustified' renderElement='a' />
				</ButtonGroup>

				<ButtonGroup isToolBar={true} >
					<ButtonGroup >
						<Button  className='test1 test2'  btnName='isToolBar-1' > </Button>
						<Button  btnStyle={'primary'}  btnName='isToolBar-1' />
					</ButtonGroup>
					<ButtonGroup>
						<Button  className='test1 test2'  btnName='isToolBar-2'> </Button>
						<Button  btnStyle={'primary'} btnName='isToolBar-2' />
					</ButtonGroup>
					<Button  className='test1 test2'  btnName='isToolBar-3 '> </Button>
					<Button  btnStyle={'primary'}  />
				</ButtonGroup>

				<ButtonGroup isVertical={true} >
					<Button   btnSize ={'lg'} btnName='isVertical-2'/>
					<Button   btnState = {'disabled'} btnStyle={'danger'} btnName='isVertical-2' />
					<Button   isBtnBlock={true} btnName='isVertical-2' />
					
				</ButtonGroup>
			</div>
		)

	}
}

export default ButtonGroupTest;
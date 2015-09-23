import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';

class PageSearch extends React.Component{

	render(){
		return(
			<div className='row'>
				<div className='col-sm-5 col-md-4 '>
					<img src='/image/skin/logo.jpg'/>
					
				</div>
				<div className='col-sm-7 col-md-8 page-search'>
					<form >
						<Input type='text' addonAfter={<Glyphicon glyph='search' />} />
					</form>
				</div>
			</div>
		);
	}
}

export default PageSearch
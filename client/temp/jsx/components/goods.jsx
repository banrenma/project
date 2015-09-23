"use strict";
class Goods extends React.Component{
	 state = { 
		imgName:  "hahah",
	};
	


	handleClickImg(){
		alert(1)
	}
	handleOrder(){
		alert(2)
	}
	render(){
		return(
			<div className="thumbnail max-width200">
				<a onClick ={this.handleClickImg.bind(this)}> <img src={this.props.imgName} alt={this.props.title} /> </a>
				<div className="caption">
					<h4>{this.props.title + '($' + this.props.price +'元)'} </h4>
					<p>{this.props.discribe}</p>
					<p>
						<a onClick={this.handleOrder.bind(this)} className="btn btn-primary " role="button">购买</a> 
						<a onClick={this.handleOrder.bind(this)} className="btn btn-primary " role="button">评价</a> 
					</p>
				</div>
			</div>
		);
	}

}

export default Goods;
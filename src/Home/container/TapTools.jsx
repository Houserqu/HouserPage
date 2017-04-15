import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import TapHead from '../component/TapHead';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class TapTools extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const style={
			main:{
				width:'1200px',
				margin:'50px auto',

			},
			toolbox:{
				width:'260px',
				float:'left',
				margin:'20px'
			},
			clear:{
				clear:'both'
			}
		}

		let toolslist = this.props.tools.map((item) =>{
			return(
				<Link to={item.url} key={item.id}>
					<Card style={style.toolbox} >
					    <CardHeader
					      title={item.title}
					      subtitle="点击  0"
					    />
					    <CardMedia>
					      <img src={item.image} />
					    </CardMedia>
					    <CardText>
					      {item.digest}
					    </CardText>
					</Card>
				</Link>
			);
		});

		return(
			<div style={style.root}>
				<TapHead introduction={this.props.introduction} />
				<div style={style.main}>
					{toolslist}
				</div>
				<div style={style.clear}></div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		introduction: state.Home.tools.introduction,
		tools: state.Home.tools.tools
	}
}

export default connect(mapStateToProps)(TapTools);
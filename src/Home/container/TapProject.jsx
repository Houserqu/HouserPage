import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import TapHead from '../component/TapHead';
import ProjectChips from '../component/ProjectChips';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

class TapProject extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const style={
			button:{
				
			},
			main:{
				width:'1200px',
				margin:'50px auto',

			},
			toolbox:{
				marginBottom:'30px'
			}
		}

		let toolslist = this.props.projects.map((item) =>{
			return(
				<Link key={item.id}>
					<Card style={style.toolbox} >
					    <CardHeader
					      title={item.username}
					      subtitle={item.time}
					      avatar={item.headimg}
					    />
					    <CardTitle title={item.title} subtitle={item.githuburl} />
					    <CardText>
					      {item.conetnt}
					      <br />
					      <br />
					      <ProjectChips tags={item.tags}/>
					    </CardText>
					    <CardActions>
					    	<RaisedButton
						      href={item.githuburl}
						      target="_blank"
						      label="Github Link"
						      primary={true}
						      style={style.button}
						     
						    />
						</CardActions>
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
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		introduction: state.Home.project.introduction,
		projects: state.Home.project.projects
	}
}

export default connect(mapStateToProps)(TapProject);
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import TapHead from '../Public/TapHead';
import ProjectChips from './ProjectChips';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

export default class TapBlog extends React.Component{
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
		
		let toolslist=[
			{
				username:'Houser',
				time:'123',
				headimg:'asd',
				title:'git',
				githuburl:'12312',
				conetnt:'123123123',
				tags:['reat']
			}
		]

		return(


			<div style={style.root}>
				<TapHead introduction={this.props.introduction} />
				<div style={style.main}>
					{
						toolslist.map(item=>{
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
					</Card>
				</Link>	
				
							)
						})
					}
				</div>
			</div>
		)
	}
}

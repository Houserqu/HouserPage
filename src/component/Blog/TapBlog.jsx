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

import {getBlogs} from '../../http';

export default class TapBlog extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[]
		}
	}

	componentDidMount=()=>{
		getBlogs(data=>{
			this.setState({list:data.result});
		});
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
		
		return(


			<div style={style.root}>
				<div style={style.main}>
					{
						this.state.list.map(item=>{
							return(
							<Link key={item.id}>
					<Card style={style.toolbox} >
					    <CardHeader
					      title='Houser'
					      subtitle={item.updated_at}
					      avatar='http://houser.oss-cn-shanghai.aliyuncs.com/houserpage/houser.jpg'
					    />
					    <CardTitle title={item.title} subtitle={item.githuburl} />
					    <CardText>
					      {item.conetnt}
					      <ProjectChips tags={[{id:'1', name:'react'},{id:'2',name:'javascript'}]}/>
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

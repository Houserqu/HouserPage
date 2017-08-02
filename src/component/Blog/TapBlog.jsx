import React from 'react';
import { connect } from 'react-redux';


import TapHead from '../Public/TapHead';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import BlogListItem from './BlogListItem';

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
			main:{
				width:'90%',
				maxWidth:'1200px',
				margin:'50px auto',

			},
			toolbox:{
				marginBottom:'30px'
			},
		}
		
		return(


			<div style={style.root}>
				<div style={style.main}>
					{
						this.state.list.map(blog=>{
							return(
								<BlogListItem key={blog.id} blog={blog}/>
							)
						})
					}
				</div>
			</div>
		)
	}
}

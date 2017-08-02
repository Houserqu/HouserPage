import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import TapHead from '../Public/TapHead';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class TapTools extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const style={
			main:{
				width:'90%',
				maxWidth:'1200px',
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

		const toolslistdata = 
		[
			{
				id:'1',
				title:'景点查询',
				digest:'中国景点查询',
				image:'/static/image/houser.jpg',
				clicks:'89',
				url:'/tools/attractions',
			},{
				id:'2',
				title:'二维码',
				digest:'在线二维码生成器',
				image:'/static/image/houser.jpg',
				clicks:'89',
				url:'/tools/QRcode',
			}
		]

		let toolslist = toolslistdata.map((item) =>{
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
				{/* <TapHead introduction='自己开发和收集的工具集' /> */}
				<div style={style.main}>
					{toolslist}
				</div>
				<div style={style.clear}></div>
			</div>
		)
	}
}

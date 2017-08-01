import React from 'react';

export default class BigHead extends React.Component{
	render(){
		const style={
			root:{
				background:'#00bcd4',
				height:'260px',
				paddingTop:'80px',
				textAlign:'center'
			},
			h1:{
				'textAlign':'center',
				'color':'#ffffff',
				fontSize:'3em'
			},
			h3:{
				'textAlign':'center',
				'color':'#ffffff'
			},
			logo:{
				height:'120px',
				width:'120px'
			}
		};
		return(
			<div style={style.root}>
				<img style={style.logo} src='http://houser.oss-cn-shanghai.aliyuncs.com/houserpage/houser.jpg' />
				<h1 style={style.h1}>Houser</h1>
				<h3 style={style.h3}>Art && Technology</h3>
			</div>
		)
	}
}
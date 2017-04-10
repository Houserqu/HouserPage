import React from 'react';

export default class TapHead extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const style={
			root:{
				background:'#eeeeee',
				height:'120px',
				padding:'30px 400px'
			},
			p:{
				
			}
		};

		return(
			<div style={style.root}>
				<p style={style.p}>{this.props.introduction}</p>
			</div>
		)
	}
}
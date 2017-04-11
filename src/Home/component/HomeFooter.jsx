import React from 'react';

export default class HomeFooter extends React.Component{
	render(){
		const style={
			root:{
				height:'200px',
				background:'#212121'
			},
			p:{
				textAlign:'center',
				color:'#eeeeee',
				paddingTop:'80px'
			}
		}
		return(
			<div style={style.root}>
				<p style={style.p}>
					Nothing is impossible
				</p>
			</div>
		)
	}
}
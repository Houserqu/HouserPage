import React from 'react';

import HomeBar from './component/Public/HomeBar';
import BigHead from './component/Public/BigHead';
import NavTap from './component/Public/NavTap';
// import HomeFooter from './component/HomeFooter';

export default class Home extends React.Component {
	render(){
		return(
			<div>
				<BigHead />
				<NavTap />
				{this.props.children}
				{/* <HomeFooter /> */}
			</div>
			)
	}
}

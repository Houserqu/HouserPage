import React from 'react';

import HomeBar from './container/HomeBar';
import BigHead from './component/BigHead';
import NavTap from './component/NavTap';

export default class Home extends React.Component {
	render(){
		return(
			<div>
				<BigHead />
				<NavTap />
				</div>
			)
	}
}

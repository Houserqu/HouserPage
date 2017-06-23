import React from 'react';

import AdminDrawer from './component/AdminDrawer';
import AdminAppBar from './container/AdminAppBar';

export default class Admin extends React.Component{
	render(){
		let style={
			'marginLeft':210
		}
		return(
			<div>
				<AdminAppBar />
				<AdminDrawer />
				<div style={style}>
					{this.props.children}
				</div>
			</div>
		)
	}
}
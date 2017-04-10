import React from 'react';

import AdminDrawer from './component/AdminDrawer';
import AdminAppBar from './container/AdminAppBar';

export default class Admin extends React.Component{
	render(){
		return(
			<div>
				<AdminAppBar />
				<AdminDrawer />
			</div>
		)
	}
}
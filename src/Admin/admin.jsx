import React from 'react';

import AppBar from 'material-ui/AppBar';

export default class Admin extends React.Component{
	render(){
		return(
			<AppBar
			    title="Admin"
			    iconClassNameRight="muidocs-icon-navigation-expand-more"
			  />
		)
	}
}
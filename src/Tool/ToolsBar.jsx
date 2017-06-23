import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';

export default class ToolsBar extends React.Component{
 
  render(){
  	return(
  		<div>
		  	<AppBar
		    title="工具"
		    iconElementLeft={<IconButton><Link to='/'><Home /></Link></IconButton>}
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		  	/>
		  	{this.props.children}
	  	</div>
  	)
  }
  
}

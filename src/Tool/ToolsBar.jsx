import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class ToolsBar extends React.Component{
 
  render(){
  	return(
  		<div>
		  	<AppBar
		    title="工具"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		  	/>
		  	{this.props.children}
	  	</div>
  	)
  }
  
}

import React from 'react';
import { Provider, connect } from 'react-redux'

import AppBar from 'material-ui/AppBar';

class HomeBar extends React.Component{
	render(){
		return(
			<AppBar
			    title={this.props.home}
			    iconClassNameRight="muidocs-icon-navigation-expand-more"
			  />
		)
	}
}

// Map Redux state to component props
function mapStateToProps(state) {
  return { 
    home: state.Home.homeglobal.name
  }
}

export default connect(mapStateToProps)(HomeBar);
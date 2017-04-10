import React from 'react';
import path from 'path';

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

export default class AdminAppBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
	}

	handleTouchTap = () => {
		this.setState({
	      open: true,
	    });
	};

	handleRequestClose = () =>{
	    this.setState({
	      open: false,
	    });
	};

	render() {

		const style = {margin: 18};
		const headimg = path.resolve(__dirname, 'static', 'image', 'houser.jpg');

		return (
		    <AppBar title="Console">
		        <Badge
			      badgeContent={4}
			      secondary={true}
			      badgeStyle={{top: 12, right: 12}}
			    >
			      <NotificationsIcon />
			    </Badge>

			    <Avatar
		          src={headimg}
		          size={30}
		          style={style}
		          onTouchTap={this.handleTouchTap.bind(this)}
		        />

		       	<Popover
		          open={this.state.open}
		          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		          targetOrigin={{horizontal: 'left', vertical: 'top'}}
		          onRequestClose={this.handleRequestClose}
		        >
		          <Menu>
		            <MenuItem primaryText="Refresh" />
		            <MenuItem primaryText="Help &amp; feedback" />
		            <MenuItem primaryText="Settings" />
		            <MenuItem primaryText="Sign out" />
		          </Menu>
		        </Popover>

		    </AppBar>
		);
	}
}
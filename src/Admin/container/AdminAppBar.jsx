import React from 'react';
import {connect} from 'react-redux';
import {setNotificationsNum} from '../adminAction';

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

class AdminAppBar extends React.Component {
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

	handelReadNotification = () =>{
		this.props.dispatch(setNotificationsNum(0));
	};

	render() {
		const style = {margin: 18};
		const {dispatch, user, notifications} = this.props;

		return (
		    <AppBar title="Console">
		        <Badge
			      badgeContent={notifications}
			      secondary={true}
			      badgeStyle={{top: 12, right: 12}}
			      onClick={this.handelReadNotification}
			    >
			      <NotificationsIcon />
			    </Badge>

			    <Avatar
		          src={user.headimg}
		          size={30}
		          style={style}
		          onTouchTap={this.handleTouchTap}
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

function mapStateToProps(state){
	return{
		user: state.Admin.global.user,
		notifications:state.Admin.global.notifications
	}
}

export default connect(mapStateToProps)(AdminAppBar)
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Drawer width={220} open={true}>
        	<AppBar 
        		title="地名/景点" 
        	/>
          <MenuItem>一、二级地名查询</MenuItem>
          <MenuItem>三级地名查询</MenuItem>
          <MenuItem>景点查询</MenuItem>
        </Drawer>
      </div>
    );
  }
}